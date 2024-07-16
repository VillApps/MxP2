/* eslint-disable no-prototype-builtins */
/* eslint-disable camelcase */
/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
import { exec } from 'child_process';
import { ipcMain } from 'electron';
import { Pool } from 'pg';

function initIpc(fn: string | undefined) {
  console.time(fn);
}

function displayError(fn: string | undefined, error: any) {
  console.timeEnd(fn);
  console.log(`${fn} -- Error`);
  console.error(error);
}

async function resEvent(fn: string | undefined, channel: any, event: any, res: {}) {
  event.reply(channel, res);
  console.timeEnd(fn);
}

function executeCommand(command: string, timeout = 600000) {
  // Increase timeout to 10 minutes (600000 milliseconds)
  return new Promise((resolve, reject) => {
    const process = exec(command, { timeout, maxBuffer: 1024 * 1024 * 10 }, (error, stdout, stderr) => {
      // Increase buffer size to 10MB
      if (error) {
        reject(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.warn(`Warning: ${stderr}`);
      }
      resolve(stdout);
    });

    // Handle process termination
    process.on('close', (code) => {
      if (code !== 0) {
        reject(`Process exited with code: ${code}`);
      } else {
        resolve(`Process completed with code: ${code}`);
      }
    });
  });
}

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

export default function AppsVilleBD() {
  ipcMain.on('getOddoDB', async (event, channel) => {
    try {
      initIpc('getOddoDB');
      console.log('++++++++   AppsVilleBD init   ++++++++++++++++');

      // Download the remote database dump
      // await executeCommand(
      //   'scp -i ~/Villa/MasXPieza2.0/AWS/MasxPieza2.pem ubuntu@ec2-3-85-225-126.compute-1.amazonaws.com:~/BKOdoo/VillAppsMxP.dump ~/Villa/MasXPieza2.0/BKOdoo/villapps.dump',
      // );
      console.log('++++++++   Downloaded remote DB dump   ++++++++++++++++');

      // Set PostgreSQL password for the session
      process.env.PGPASSWORD = 'nTX6hc7taKefbNT';

      // Create 'odoo' role if it doesn't exist
      //      in postgres terminal
      //      DO $$
      // BEGIN
      //     IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'odoo') THEN
      //         CREATE ROLE odoo;
      //     END IF;
      // END $$;

      // Terminate connections to the 'villapps' database
      await executeCommand('psql -U postgres -c "SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = \'villappsmxp\' AND pid <> pg_backend_pid()"');
      console.log('++++++++   Disconnected local DB   ++++++++++++++++');

      // Drop and recreate the 'villapps' database
      await executeCommand('psql -U postgres -c "DROP DATABASE IF EXISTS villappsmxp"');
      console.log('++++++++   Dropped local DB   ++++++++++++++++');
      await executeCommand('psql -U postgres -c "CREATE DATABASE villappsmxp"');
      console.log('++++++++   Created local DB   ++++++++++++++++');

      // Restore the database from the dump file
      await executeCommand(
        'pg_restore --host "localhost" --port "5432" --username "postgres" --no-password --dbname "villappsmxp" --verbose "/Users/luisalbertovillachavez/Villa/MasXPieza2.0/BKOdoo/villapps.dump"',
      );
      console.log('++++++++   Restored local DB   ++++++++++++++++');

      // Cleanup: unset PostgreSQL password
      delete process.env.PGPASSWORD;

      // Respond to the IPC event
      await resEvent('getOddoDB', channel, event, true);
      return true;
    } catch (error) {
      displayError('getOddoDB', error);
      return false;
    }
  });

  ipcMain.on('processPG', async (event, channel) => {
    try {
      initIpc('processPG');
      process.stdout.write('\x1Bc');
      console.log('++++++++   processPG init   ++++++++++++++++');
      const res: any = {
        generales: {
          ventas: { amount_sub_total: 0, amount_tax: 0, amount_total: 0, reembolsos: { amount_sub_total: 0, amount_tax: 0, amount_total: 0 } },
          costos: { amount_sub_total: 0, amount_tax: 0, amount_total: 0, remision: 0, facturado: { total: 0, IVA: 0 } },
        },
        pos: {
          ventas: { amount_sub_total: 0, amount_tax: 0, amount_total: 0, reembolsos: { amount_sub_total: 0, amount_tax: 0, amount_total: 0 } },
          costos: { amount_sub_total: 0, amount_tax: 0, amount_total: 0, remision: 0, facturado: { total: 0, IVA: 0 } },
        },
        sos: {
          ventas: { amount_sub_total: 0, amount_tax: 0, amount_total: 0, reembolsos: { amount_sub_total: 0, amount_tax: 0, amount_total: 0 } },
          costos: { amount_sub_total: 0, amount_tax: 0, amount_total: 0, remision: 0, facturado: { total: 0, IVA: 0 } },
        },
      };
      const pool = new Pool({
        user: 'postgres',
        host: '/tmp',
        database: 'villappsmxp',
        password: 'nTX6hc7taKefbNT',
      });
      const client = await pool.connect();
      // let pSOLs: any = await client.query(`
      //     WITH last_purchase AS (
      //       SELECT
      //           pol.id AS pos_order_line_id,
      //           pol.product_id,
      //           pol.create_date,
      //           pol2.price_unit AS purchase_price_unit,
      //           pol2.price_subtotal AS purchase_price_subtotal,
      //           pol2.price_total AS purchase_price_total,
      //           pol2.product_qty AS purchase_product_qty
      //       FROM
      //           pos_order_line pol
      //       LEFT JOIN LATERAL (
      //           SELECT
      //               pol2.price_unit,
      //               pol2.price_subtotal,
      //               pol2.price_total,
      //               pol2.product_qty
      //           FROM
      //               purchase_order_line pol2
      //           JOIN purchase_order po2 ON po2.id = pol2.order_id
      //           WHERE
      //               pol2.product_id = pol.product_id
      //               AND po2.date_order <= pol.create_date
      //           ORDER BY
      //               po2.date_order DESC
      //           LIMIT 1
      //       ) pol2 ON true
      //   )
      //   SELECT
      //       pol.full_product_name,
      //       pol.price_subtotal_incl,
      //       pol.price_subtotal,
      //       pol.name,
      //       pol.qty,
      //       (SELECT
      //           value_float
      //       FROM
      //           ir_property
      //       WHERE
      //           name = 'standard_price'
      //           AND res_id = 'product.product,' || pol.product_id
      //       LIMIT 1
      //       ) AS standard_cost,
      //       pol.refunded_orderline_id,
      //       pol.create_date AT TIME ZONE 'UTC' AT TIME ZONE 'America/Mexico_City' AS create_date,
      //       lp.purchase_price_unit,
      //       lp.purchase_price_subtotal,
      //       lp.purchase_price_total,
      //       lp.purchase_product_qty
      //   FROM
      //       pos_order_line pol
      //   LEFT JOIN
      //       last_purchase lp ON pol.id = lp.pos_order_line_id
      //   WHERE
      //       pol.create_date AT TIME ZONE 'UTC' AT TIME ZONE 'America/Mexico_City' >= date_trunc('month', CURRENT_DATE AT TIME ZONE 'America/Mexico_City') - interval '1 month'
      //       AND pol.create_date AT TIME ZONE 'UTC' AT TIME ZONE 'America/Mexico_City' < date_trunc('month', CURRENT_DATE AT TIME ZONE 'America/Mexico_City')
      //   ORDER BY
      //       pol.create_date;

      // `);
      // pSOLs = pSOLs.rows;
      // for (let i = 0; i < pSOLs.length; i++) {
      //   const pSOL = pSOLs[i];
      //   let store;
      //   if (pSOL.name.split('/')[0] === 'MFULL') {
      //     store = 'MFULL';
      //   } else {
      //     store = pSOL.name.split('-')[0];
      //   }
      //   if (!res.pos[store]) {
      //     res.pos[store] = {
      //       ventas: { amount_sub_total: 0, amount_tax: 0, amount_total: 0, reembolsos: { amount_sub_total: 0, amount_tax: 0, amount_total: 0 } },
      //       costos: { amount_sub_total: 0, amount_tax: 0, amount_total: 0, remision: 0, facturado: { total: 0, IVA: 0 } },
      //     };
      //   }
      //   if (!pSOL.refunded_orderline_id) {
      //     const price_subtotal = parseFloat(pSOL.price_subtotal);
      //     const price_subtotal_incl = parseFloat(pSOL.price_subtotal_incl);
      //     const amount_tax = price_subtotal_incl - price_subtotal;
      //     const purchase_price_total = parseFloat(pSOL.purchase_price_total);
      //     const purchase_price_subtotal = parseFloat(pSOL.purchase_price_subtotal);
      //     const purchase_product_qty = parseFloat(pSOL.purchase_product_qty);
      //     const qty = parseFloat(pSOL.qty);
      //     const standard_cost = parseFloat(pSOL.standard_cost);

      //     // General sales calculations
      //     res.generales.ventas.amount_sub_total += price_subtotal;
      //     res.generales.ventas.amount_tax += amount_tax;
      //     res.generales.ventas.amount_total += price_subtotal_incl;

      //     // POS sales calculations
      //     res.pos.ventas.amount_sub_total += price_subtotal;
      //     res.pos.ventas.amount_tax += amount_tax;
      //     res.pos.ventas.amount_total += price_subtotal_incl;

      //     // Store-specific sales calculations
      //     res.pos[store].ventas.amount_sub_total += price_subtotal;
      //     res.pos[store].ventas.amount_tax += amount_tax;
      //     res.pos[store].ventas.amount_total += price_subtotal_incl;

      //     // Cost calculations if purchase price is available
      //     if (purchase_price_total && purchase_product_qty) {
      //       const cost_total = (purchase_price_total / purchase_product_qty) * qty;
      //       const cost_subtotal = (purchase_price_subtotal / purchase_product_qty) * qty;
      //       const cost_tax = cost_total - cost_subtotal;

      //       // General cost calculations
      //       res.generales.costos.amount_total += cost_total;
      //       res.generales.costos.amount_sub_total += cost_subtotal;
      //       res.generales.costos.amount_tax += cost_tax;

      //       // POS cost calculations
      //       res.pos.costos.amount_total += cost_total;
      //       res.pos.costos.amount_sub_total += cost_subtotal;
      //       res.pos.costos.amount_tax += cost_tax;

      //       // Store-specific cost calculations
      //       res.pos[store].costos.amount_total += cost_total;
      //       res.pos[store].costos.amount_sub_total += cost_subtotal;
      //       res.pos[store].costos.amount_tax += cost_tax;
      //       // Determine if costs match subtotal or have tax
      //       if (purchase_price_subtotal === purchase_price_total) {
      //         res.generales.costos.remision += cost_total;
      //         res.pos.costos.remision += cost_total;
      //         res.pos[store].costos.remision += cost_total;
      //       } else {
      //         res.generales.costos.facturado.total += cost_total;
      //         res.generales.costos.facturado.IVA += cost_tax;

      //         res.pos.costos.facturado.total += cost_total;
      //         res.pos.costos.facturado.IVA += cost_tax;

      //         res.pos[store].costos.facturado.total += cost_total;
      //         res.pos[store].costos.facturado.IVA += cost_tax;
      //       }
      //     } else if (standard_cost) {
      //       res.pos.costos.amount_total += standard_cost;
      //     }
      //   } else {
      //     res.generales.ventas.reembolsos.amount_sub_total += parseFloat(pSOL.price_subtotal);
      //     res.generales.ventas.reembolsos.amount_tax += parseFloat(pSOL.price_subtotal_incl) - parseFloat(pSOL.price_subtotal);
      //     res.generales.ventas.reembolsos.amount_total += parseFloat(pSOL.price_subtotal_incl);

      //     res.pos.ventas.reembolsos.amount_sub_total += parseFloat(pSOL.price_subtotal);
      //     res.pos.ventas.reembolsos.amount_tax += parseFloat(pSOL.price_subtotal_incl) - parseFloat(pSOL.price_subtotal);
      //     res.pos.ventas.reembolsos.amount_total += parseFloat(pSOL.price_subtotal_incl);

      //     res.pos[store].ventas.reembolsos.amount_sub_total += parseFloat(pSOL.price_subtotal);
      //     res.pos[store].ventas.reembolsos.amount_tax += parseFloat(pSOL.price_subtotal_incl) - parseFloat(pSOL.price_subtotal);
      //     res.pos[store].ventas.reembolsos.amount_total += parseFloat(pSOL.price_subtotal_incl);
      //   }
      // }
      let sOps: any = await client.query(`
        SELECT
            rp.id AS partner_id,
            ap.id AS payment_id,
            invoice.name AS invoice_name,
            rp.name AS partner_name,
            rpc.name AS category_name,
            am.date AS payment_date,
            invoice.date AS invoice_date,
            ap.amount_company_currency_signed,
            invoice.amount_total AS invoice_amount,
            invoice.invoice_origin,
            invoice.move_type
        FROM
            account_payment ap
        JOIN
            account_move am ON am.payment_id = ap.id
        JOIN
            res_partner rp ON ap.partner_id = rp.id
        JOIN
            res_partner_res_partner_category_rel rp_rpc ON rp.id = rp_rpc.partner_id
        JOIN
            res_partner_category rpc ON rpc.id = rp_rpc.category_id
        JOIN
            account_move_line aml_payment ON aml_payment.move_id = am.id
        JOIN
            account_partial_reconcile apr ON aml_payment.id = apr.credit_move_id
        JOIN
            account_move_line aml_invoice ON apr.debit_move_id = aml_invoice.id
        JOIN
            account_move invoice ON aml_invoice.move_id = invoice.id
        WHERE
            am.date AT TIME ZONE 'UTC' AT TIME ZONE 'America/Mexico_City' >= date_trunc('month', CURRENT_DATE AT TIME ZONE 'America/Mexico_City') - interval '1 month'
            AND am.date AT TIME ZONE 'UTC' AT TIME ZONE 'America/Mexico_City' < date_trunc('month', CURRENT_DATE AT TIME ZONE 'America/Mexico_City')
            AND ap.payment_type = 'inbound' -- Pagos recibidos (cuentas por cobrar)
        ORDER BY
            am.date;
      `);
      sOps = sOps.rows;
      const sORes: any = {};
      for (let i = 0; i < sOps.length; i++) {
        const sOp = sOps[i];
        if (!sORes[sOp.partner_id]) {
          sORes[sOp.partner_id] = {};
        }
        if (!sORes[sOp.partner_id][sOp.payment_id]) {
          sORes[sOp.partner_id][sOp.payment_id] = {};
        }
        if (!sORes[sOp.partner_id][sOp.payment_id][sOp.invoice_name]) {
          sORes[sOp.partner_id][sOp.payment_id][sOp.invoice_name] = {};
        }
        if (!sORes[sOp.partner_id][sOp.payment_id][sOp.invoice_name][sOp.move_type]) {
          sORes[sOp.partner_id][sOp.payment_id][sOp.invoice_name][sOp.move_type] = [];
        }
        sORes[sOp.partner_id][sOp.payment_id][sOp.invoice_name][sOp.move_type].push(sOp);
        let sOpRefunds: any = await client.query(`
          SELECT
            am.move_type,
            aml.display_type,
            am.ref,
            am.invoice_origin,
            aml.amount_currency
          FROM
            account_move am
          JOIN
            account_move_line aml ON aml.move_id = am.id
          WHERE
            am.invoice_origin = '${sOp.invoice_origin}'
            AND am.move_type = 'out_refund'
            AND aml.reconciled
        `);
        sOpRefunds = sOpRefunds.rows;
        if (sOpRefunds.length > 0) {
          sORes[sOp.partner_id][sOp.payment_id][sOp.invoice_name][sOpRefunds[0].move_type] = sOpRefunds;
        }
        let sOpProducts: any = await client.query(`
          WITH last_purchase AS (
            SELECT
                aml.id AS account_move_line_id,
                aml.product_id,
                aml.write_date,
                pol2.price_unit AS purchase_price_unit,
                pol2.price_subtotal AS purchase_price_subtotal,
                pol2.price_total AS purchase_price_total,
                pol2.product_qty AS purchase_product_qty
            FROM
                account_move_line aml
            LEFT JOIN LATERAL (
                SELECT
                    pol2.price_unit,
                    pol2.price_subtotal,
                    pol2.price_total,
                    pol2.product_qty
                FROM
                    purchase_order_line pol2
                JOIN purchase_order po2 ON po2.id = pol2.order_id
                WHERE
                    pol2.product_id = aml.product_id
                    AND po2.date_order <= aml.create_date
                ORDER BY
                    po2.date_order DESC
                LIMIT 1
            ) pol2 ON true
          )
          SELECT
            am.move_type,
            aml.display_type,
            aml.name,
            am.invoice_origin,
            aml.amount_currency,
             (SELECT
                  value_float
              FROM
                  ir_property
              WHERE
                  name = 'standard_price'
                  AND res_id = 'product.product,' || aml.product_id
              LIMIT 1
              ) AS standard_cost,
              lp.purchase_price_unit,
              lp.purchase_price_subtotal,
              lp.purchase_price_total,
              lp.purchase_product_qty
          FROM
            account_move am
          JOIN
            account_move_line aml ON aml.move_id = am.id
          LEFT JOIN
            last_purchase lp ON aml.id = lp.account_move_line_id
          WHERE
            am.invoice_origin = '${sOp.invoice_origin}'
            AND aml.display_type = 'product'
            AND aml.name != '[DESCUENTO] DESCUENTO'
        `);
        sOpProducts = sOpProducts.rows;
        sORes[sOp.partner_id][sOp.payment_id][sOp.invoice_name].products = sOpProducts;
      }
      logL('AppsVilleBD - processPG - sORes', sORes);

      await resEvent('processPG', channel, event, res);
      client.release();
      await pool.end();
      return true;
    } catch (error) {
      displayError('processPG', error);
      return false;
    }
  });
}
