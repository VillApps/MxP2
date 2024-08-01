/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import { Pool, PoolClient } from 'pg';
import { MongoClient, Collection } from 'mongodb';

const BATCH_SIZE = 500; // Increase batch size to reduce overhead
const CONCURRENT_LIMIT = 5; // Limit the number of concurrent batches

function logL(text: string, obj: any) {
  console.log('-------------------------------------------');
  console.log(text);
  if (obj instanceof Error) {
    console.log(JSON.stringify(obj.message, null, 2));
  } else {
    console.log(JSON.stringify(obj, null, 2));
  }
  console.log('------------------------------------------');
}

function calculateDaysBetweenDates(date1: string, date2: string): number {
  const oneDay = 24 * 60 * 60 * 1000; // Milliseconds in a day
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);
  return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay));
}

function generateDatesForYear(year: number) {
  const dates: any = {};
  const startDate = new Date(`${year}-01-01`);
  const endDate = new Date();

  while (startDate <= endDate) {
    const formattedDate = startDate.toISOString().split('T')[0];
    dates[formattedDate] = { saleQty: 0, costTotal: 0, saleAmount: 0, profitAT: 0 };
    startDate.setDate(startDate.getDate() + 1);
  }
  return dates;
}

async function fetchProductData(client: PoolClient, mongoPIds: Set<number>) {
  const { rows: products } = await client.query(
    `
    SELECT pp.id
    FROM product_product pp
    JOIN product_template pt ON pt.id = pp.product_tmpl_id
    WHERE pp.active
    AND pp.id != ALL($1)
    `,
    [Array.from(mongoPIds)],
  );
  return products;
}

async function fetchProdPoAmlc(client: PoolClient, productId: number) {
  const { rows: prodPoAmlc } = await client.query(
    `
    SELECT
      am.invoice_origin AS am_invoice_origin,
      am.move_type AS am_move_type,
      aml.display_type,
      am.name AS am_name,
      aml.date,
      aml.product_id,
      aml.quantity,
      (aml.price_total / aml.quantity) AS cost_unit,
      pp.default_code,
      pp.barcode,
      pt.name->>'es_MX' AS pt_name
    FROM account_move am
    JOIN account_move_line aml ON aml.move_id = am.id
    LEFT JOIN product_product pp ON aml.product_id = pp.id
    LEFT JOIN product_template pt ON pt.id = pp.product_tmpl_id
    WHERE pp.id = $1
    AND aml.display_type = 'product'
    AND am.move_type = 'in_invoice'
    ORDER BY aml.date;
    `,
    [productId],
  );
  return prodPoAmlc;
}

async function fetchPosAndSoData(client: PoolClient, prodAml: any, nextPurchaseDate: string) {
  const [posS, sos] = await Promise.all([
    client.query(
      `
      SELECT
        po.pos_reference,
        pol.price_unit,
        pol.create_date,
        pol.qty,
        pol.price_subtotal,
        pol.full_product_name,
        pol.name
      FROM pos_order_line pol
      JOIN pos_order po ON po.id = pol.order_id
      WHERE pol.product_id = $1
      AND pol.create_date BETWEEN $2 AND $3
      ORDER BY pol.create_date ASC
      `,
      [prodAml.product_id, prodAml.date, nextPurchaseDate],
    ),
    client.query(
      `
      SELECT
        aml.quantity,
        aml.price_unit,
        aml.price_subtotal,
        aml.date,
        aml.move_name
      FROM account_move_line aml
      JOIN account_move am ON am.id = aml.move_id
      WHERE aml.product_id = $1
      AND am.date BETWEEN $2 AND $3
      AND am.move_type = 'out_invoice'
      `,
      [prodAml.product_id, prodAml.date, nextPurchaseDate],
    ),
  ]);

  return { posRecords: posS.rows, soRecords: sos.rows };
}

async function processProduct(client: PoolClient, dbProd: Collection, product: any, prodPoAmlc: any[], index: number, total: number) {
  const operations: any = {};
  const year = new Date().getFullYear();
  const peridodicOper = generateDatesForYear(year);
  const globales: any = {
    product_id: product.id,
    purchaseQtyTotal: 0,
    saleQtyTotal: 0,
    saleQtyPerDayTotal: 0,
    saleQtyPDMAX: 0,
    saleQtyPDMIN: 9999999999,
    hasNegativeProfit: false,
    lowestProfit: 9999999999,
    lowestProfitOperation: '',
    priceMax: 0,
    priceMin: 9999999999,
    profitAT: 0,
    saleAmountTotal: 0,
    profitPercent: 0,
    costTotal: 0,
  };

  await Promise.all(
    prodPoAmlc.map(async (prodAml, i) => {
      if (!operations[prodAml.product_id]) {
        operations[prodAml.product_id] = [];
      }
      const am_invoice_origin: any = {
        name: prodAml.am_invoice_origin,
        purchasedQty: Number(prodAml.quantity),
        saleQty: 0,
        profitAT: 0,
        profitAvgPp: 0,
        piceAvgPp: 0,
        priceMax: 0,
        priceMin: 9999999999,
        profitPercent: 0,
        saleAmount: 0,
        costTotal: 0,
      };
      const today = new Date().toISOString().split('T')[0];
      const nextPurchaseDate = i < prodPoAmlc.length - 1 && prodPoAmlc[i + 1]?.date ? prodPoAmlc[i + 1].date : today;
      am_invoice_origin.daysBetweenPOs = calculateDaysBetweenDates(prodAml.date, nextPurchaseDate);

      const { posRecords, soRecords } = await fetchPosAndSoData(client, prodAml, nextPurchaseDate);
      const combinedRecords = posRecords.concat(soRecords);
      const days = new Set();
      let priceSum = 0;

      combinedRecords.forEach((record) => {
        if (record.create_date) {
          const dateSale = record.create_date.toISOString().split('T')[0];
          if (!peridodicOper[dateSale]) {
            peridodicOper[dateSale] = { saleQty: 0, costTotal: 0, saleAmount: 0, profitAT: 0 };
          }
          days.add(dateSale);

          record.price_unit = parseFloat(record.price_unit);
          record.costTotal = parseFloat(record.qty || record.quantity) * parseFloat(prodAml.cost_unit);
          record.profitAT = parseFloat(record.price_subtotal) - record.costTotal;
          record.profitUnit = record.price_unit - parseFloat(prodAml.cost_unit);

          globales.hasNegativeProfit = globales.hasNegativeProfit || record.profitUnit < 0;
          globales.lowestProfit = Math.min(globales.lowestProfit, record.profitUnit);
          globales.lowestProfitOperation =
            globales.lowestProfit === record.profitUnit
              ? { oper: posRecords.includes(record) ? 'pos' : 'so', data: record.name || record.move_name }
              : globales.lowestProfitOperation;

          globales.priceMax = Math.max(globales.priceMax, record.price_unit);
          globales.priceMin = Math.min(globales.priceMin, record.price_unit);

          am_invoice_origin.priceMax = Math.max(am_invoice_origin.priceMax, record.price_unit);
          am_invoice_origin.priceMin = Math.min(am_invoice_origin.priceMin, record.price_unit);

          am_invoice_origin.costTotal += record.costTotal;
          am_invoice_origin.saleAmount += parseFloat(record.price_subtotal);
          am_invoice_origin.saleQty += parseInt(record.qty || record.quantity, 10);
          am_invoice_origin.profitAT += record.profitAT;

          peridodicOper[dateSale].costTotal += record.costTotal;
          peridodicOper[dateSale].saleAmount += parseFloat(record.price_subtotal);
          peridodicOper[dateSale].saleQty += parseInt(record.qty || record.quantity, 10);
          peridodicOper[dateSale].profitAT += record.profitAT;

          globales.profitAT += record.profitAT;
          globales.costTotal += record.costTotal;
          globales.saleAmountTotal += parseFloat(record.price_subtotal);
          priceSum += record.price_unit;
        }
      });

      if (combinedRecords.length) {
        am_invoice_origin.piceAvgPp = priceSum / combinedRecords.length;
      }

      am_invoice_origin.profitAvgPp = am_invoice_origin.profitAT / am_invoice_origin.saleQty || 0;
      am_invoice_origin.profitPercent = (am_invoice_origin.profitAT * 100) / am_invoice_origin.saleAmount || 0;
      am_invoice_origin.saleDays = days.size;
      am_invoice_origin.salePerDay = am_invoice_origin.saleQty / days.size || 0;

      globales.saleQtyPDMAX = Math.max(globales.saleQtyPDMAX, am_invoice_origin.salePerDay);
      globales.saleQtyPDMIN = Math.min(globales.saleQtyPDMIN, am_invoice_origin.salePerDay);

      am_invoice_origin.PercSale = (am_invoice_origin.saleQty * 100) / am_invoice_origin.purchasedQty;
      globales.purchaseQtyTotal += am_invoice_origin.purchasedQty;
      globales.saleQtyTotal += am_invoice_origin.saleQty;
      globales.saleQtyPerDayTotal += am_invoice_origin.salePerDay;

      // Validate min and max price
      if (am_invoice_origin.priceMin > am_invoice_origin.priceMax) {
        am_invoice_origin.priceMin = 0;
        am_invoice_origin.priceMax = 0;
      }

      operations[prodAml.product_id].push(am_invoice_origin);
    }),
  );

  if (operations[product.id]) {
    globales.profitPercent = (globales.profitAT * 100) / globales.saleAmountTotal;
    globales.purchaseQtyTotalAvg = globales.purchaseQtyTotal / prodPoAmlc.length;
    globales.saleQtyTotalAvg = globales.saleQtyTotal / prodPoAmlc.length;
    globales.saleQtyPerDayTotalAVg = globales.saleQtyPerDayTotal / prodPoAmlc.length;
    if (prodPoAmlc.length > 3) {
      globales.saleQtyPerDayTotalAVg = (globales.saleQtyPerDayTotal - globales.saleQtyPDMIN - globales.saleQtyPDMAX) / (prodPoAmlc.length - 2);
    }

    operations[product.id].forEach((operation: any) => {
      operation.purchaseQtyTotal = globales.purchaseQtyTotal;
      operation.saleQtyTotal = globales.saleQtyTotal;
      operation.purchaseQtyTotalAvg = globales.purchaseQtyTotalAvg;
      operation.saleQtyTotalAvg = globales.saleQtyTotalAvg;
      operation.saleQtyPerDayTotalAVg = globales.saleQtyPerDayTotalAVg;
    });

    const sortedPeridodicOperArray = Object.keys(peridodicOper)
      .sort()
      .map((date) => ({ ...peridodicOper[date], date }));

    await dbProd.insertOne({
      ...globales,
      operations: operations[product.id],
      peridodicOper: sortedPeridodicOperArray,
    });

    logL(`MongoDB updated for product ${product.id} (${index + 1} of ${total} products processed)`, {});
  } else {
    await dbProd.insertOne({ product_id: product.id });
    logL(`MongoDB updated for product ${product.id} with no sales data (${index + 1} of ${total} products processed)`, {});
  }
}

function chunkArray<T>(array: T[], size: number): T[][] {
  return array.reduce((acc: T[][], _, index) => {
    if (index % size === 0) {
      acc.push(array.slice(index, index + size));
    }
    return acc;
  }, []);
}

async function processBatch(batch: any[], client: PoolClient, dbProd: Collection, totalProducts: number, batchIndex: number) {
  const promises = batch.map(async (product, index) => {
    const globalIndex = batchIndex * BATCH_SIZE + index;

    const prodPoAmlc = await fetchProdPoAmlc(client, product.id);
    if (prodPoAmlc.length) {
      await processProduct(client, dbProd, product, prodPoAmlc, globalIndex, totalProducts);
    } else {
      await dbProd.insertOne({ product_id: product.id });
      logL(`MongoDB updated for product ${product.id} with no purchase data (${globalIndex + 1} of ${totalProducts} products processed)`, {});
    }
  });
  await Promise.all(promises);
}

async function processBatches(productBatches: any[][], client: PoolClient, dbProd: Collection, totalProducts: number) {
  const queue = [];
  for (let i = 0; i < productBatches.length; i++) {
    const batch = productBatches[i];
    const processPromise = processBatch(batch, client, dbProd, totalProducts, i);
    queue.push(processPromise);

    if (queue.length >= CONCURRENT_LIMIT) {
      // eslint-disable-next-line no-await-in-loop
      await Promise.all(queue);
      queue.length = 0; // Clear the queue
    }
  }
  await Promise.all(queue);
}

export default async function processPrice() {
  const pool = new Pool({
    user: 'postgres',
    host: '/tmp',
    database: 'villappsmxp',
    password: 'nTX6hc7taKefbNT',
  });

  const client = await pool.connect();
  const url = 'mongodb://localhost:27017';
  const mdb = new MongoClient(url);
  await mdb.connect();
  const db = mdb.db('villapps');
  const dbProd = db.collection('Productos');

  try {
    logL('++++++++   processPrice init   ++++++++++++++++', {});
    process.stdout.write('\x1Bc');
    const mongoDataProducts = await dbProd.find({}).toArray();
    const mongoPIds = new Set(mongoDataProducts.map((product) => product.product_id));
    const products = await fetchProductData(client, mongoPIds);
    const totalProducts = products.length;

    const productBatches = chunkArray(products, BATCH_SIZE);

    await processBatches(productBatches, client, dbProd, totalProducts);

    return true;
  } catch (error) {
    logL('*************** processPrice - Error **************', error);
    return false;
  } finally {
    await mdb.close();
    client.release();
  }
}
