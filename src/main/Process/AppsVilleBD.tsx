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
import { MongoClient } from 'mongodb';

export default function AppsVilleBD() {
  const url = 'mongodb://localhost:27017';
  const mdb = new MongoClient(url);
  const mdbName = 'villapps';

  const pool = new Pool({
    user: 'postgres',
    host: '/tmp',
    database: 'villappsmxp',
    password: 'nTX6hc7taKefbNT',
  });

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

  ipcMain.on('processPG', async (event, channel, periodo) => {
    try {
      initIpc('processPG');
      process.stdout.write('\x1Bc');
      console.log('++++++++   processPG init   ++++++++++++++++');
      logL('AppsVilleBD - processPG - periodo', periodo);
      const res: any = {
        generales: {
          ventas: { amount_sub_total: 0, amount_tax: 0, amount_total: 0, reembolsos: { amount_sub_total: 0, amount_tax: 0, amount_total: 0 } },
          costos: { amount_sub_total: 0, amount_tax: 0, amount_total: 0, remision: 0, facturado: { amount_total: 0, amount_tax: 0, amount_sub_total: 0 } },
        },
        pos: {
          ventas: { amount_sub_total: 0, amount_tax: 0, amount_total: 0, reembolsos: { amount_sub_total: 0, amount_tax: 0, amount_total: 0 } },
          costos: { amount_sub_total: 0, amount_tax: 0, amount_total: 0, remision: 0, facturado: { amount_total: 0, amount_tax: 0, amount_sub_total: 0 } },
        },
        sos: {
          ventas: { amount_sub_total: 0, amount_tax: 0, amount_total: 0, reembolsos: { amount_sub_total: 0, amount_tax: 0, amount_total: 0 } },
          costos: { amount_sub_total: 0, amount_tax: 0, amount_total: 0, remision: 0, facturado: { amount_total: 0, amount_tax: 0, amount_sub_total: 0 } },
        },
      };
      const client = await pool.connect();
      let pSOLs: any = await client.query(
        `
          WITH last_purchase AS (
            SELECT
                pol.id AS pos_order_line_id,
                pol.product_id,
                pol.create_date,
                pol2.price_unit AS purchase_price_unit,
                pol2.price_subtotal AS purchase_price_subtotal,
                pol2.price_total AS purchase_price_total,
                pol2.product_qty AS purchase_product_qty
            FROM
                pos_order_line pol
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
                    pol2.product_id = pol.product_id
                    AND po2.date_order <= pol.create_date
                ORDER BY
                    po2.date_order DESC
                LIMIT 1
            ) pol2 ON true
        )
        SELECT
            pol.full_product_name,
            pol.price_subtotal_incl,
            pol.price_subtotal,
            pos.name,
            pol.qty,
            (SELECT
                value_float
            FROM
                ir_property
            WHERE
                name = 'standard_price'
                AND res_id = 'product.product,' || pol.product_id
            LIMIT 1
            ) AS standard_cost,
            pol.refunded_orderline_id,
            pos.create_date,
            lp.purchase_price_unit,
            lp.purchase_price_subtotal,
            lp.purchase_price_total,
            lp.purchase_product_qty
        FROM
            pos_order_line pol
        JOIN
            pos_order pos ON pos.id = pol.order_id
        LEFT JOIN
            last_purchase lp ON pol.id = lp.pos_order_line_id
        WHERE
            pol.create_date AT TIME ZONE 'UTC' AT TIME ZONE 'America/Mexico_City' >= date_trunc('month', TO_TIMESTAMP($1, 'YYYY-MM-DDTHH:MI:SSZ') AT TIME ZONE 'America/Mexico_City')
            AND pol.create_date AT TIME ZONE 'UTC' AT TIME ZONE 'America/Mexico_City' < date_trunc('month', TO_TIMESTAMP($1, 'YYYY-MM-DDTHH:MI:SSZ') AT TIME ZONE 'America/Mexico_City') + interval '1 month'
        ORDER BY
            pol.create_date ASC;
      `,
        [periodo],
      );
      pSOLs = pSOLs.rows;
      for (let i = 0; i < pSOLs.length; i++) {
        const pSOL = pSOLs[i];
        let store;
        logL('AppsVilleBD - processPG - pol.create_date', new Date(pSOL.create_date).getUTCHours());
        if (pSOL.name.split('/')[0] === 'MFULL') {
          store = 'MFULL';
        } else {
          store = pSOL.name.split('-')[0];
        }
        if (!res.pos[store]) {
          res.pos[store] = {
            ventas: { amount_sub_total: 0, amount_tax: 0, amount_total: 0, reembolsos: { amount_sub_total: 0, amount_tax: 0, amount_total: 0 } },
            costos: { amount_sub_total: 0, amount_tax: 0, amount_total: 0, remision: 0, facturado: { amount_total: 0, amount_tax: 0, amount_sub_total: 0 } },
          };
        }
        if (!pSOL.refunded_orderline_id) {
          const price_subtotal = parseFloat(pSOL.price_subtotal);
          const price_subtotal_incl = parseFloat(pSOL.price_subtotal_incl);
          const amount_tax = price_subtotal_incl - price_subtotal;
          const purchase_price_total = parseFloat(pSOL.purchase_price_total);
          const purchase_price_subtotal = parseFloat(pSOL.purchase_price_subtotal);
          const purchase_product_qty = parseFloat(pSOL.purchase_product_qty);
          const qty = parseFloat(pSOL.qty);
          const standard_cost = parseFloat(pSOL.standard_cost);

          // General sales calculations
          res.generales.ventas.amount_sub_total += price_subtotal;
          res.generales.ventas.amount_tax += amount_tax;
          res.generales.ventas.amount_total += price_subtotal_incl;

          // POS sales calculations
          res.pos.ventas.amount_sub_total += price_subtotal;
          res.pos.ventas.amount_tax += amount_tax;
          res.pos.ventas.amount_total += price_subtotal_incl;

          // Store-specific sales calculations
          res.pos[store].ventas.amount_sub_total += price_subtotal;
          res.pos[store].ventas.amount_tax += amount_tax;
          res.pos[store].ventas.amount_total += price_subtotal_incl;

          // Cost calculations if purchase price is available
          if (purchase_price_total && purchase_product_qty) {
            const cost_total = (purchase_price_total / purchase_product_qty) * qty;
            const cost_subtotal = (purchase_price_subtotal / purchase_product_qty) * qty;
            const cost_tax = cost_total - cost_subtotal;

            // General cost calculations
            res.generales.costos.amount_total += cost_total;
            res.generales.costos.amount_sub_total += cost_subtotal;
            res.generales.costos.amount_tax += cost_tax;

            // POS cost calculations
            res.pos.costos.amount_total += cost_total;
            res.pos.costos.amount_sub_total += cost_subtotal;
            res.pos.costos.amount_tax += cost_tax;

            // Store-specific cost calculations
            res.pos[store].costos.amount_total += cost_total;
            res.pos[store].costos.amount_sub_total += cost_subtotal;
            res.pos[store].costos.amount_tax += cost_tax;
            // Determine if costs match subtotal or have tax
            if (purchase_price_subtotal === purchase_price_total) {
              res.generales.costos.remision += cost_total;
              res.pos.costos.remision += cost_total;
              res.pos[store].costos.remision += cost_total;
            } else {
              res.generales.costos.facturado.amount_sub_total += cost_total - cost_tax;
              res.generales.costos.facturado.amount_tax += cost_tax;
              res.generales.costos.facturado.amount_total += cost_total;

              res.pos.costos.facturado.amount_sub_total += cost_total - cost_tax;
              res.pos.costos.facturado.amount_tax += cost_tax;
              res.pos.costos.facturado.amount_total += cost_total;

              res.pos[store].costos.facturado.amount_sub_total += cost_total - cost_tax;
              res.pos[store].costos.facturado.amount_tax += cost_tax;
              res.pos[store].costos.facturado.amount_total += cost_total;
            }
          } else if (standard_cost) {
            res.pos.costos.amount_total += standard_cost;
          }
        } else {
          res.generales.ventas.reembolsos.amount_sub_total += parseFloat(pSOL.price_subtotal);
          res.generales.ventas.reembolsos.amount_tax += parseFloat(pSOL.price_subtotal_incl) - parseFloat(pSOL.price_subtotal);
          res.generales.ventas.reembolsos.amount_total += parseFloat(pSOL.price_subtotal_incl);

          res.pos.ventas.reembolsos.amount_sub_total += parseFloat(pSOL.price_subtotal);
          res.pos.ventas.reembolsos.amount_tax += parseFloat(pSOL.price_subtotal_incl) - parseFloat(pSOL.price_subtotal);
          res.pos.ventas.reembolsos.amount_total += parseFloat(pSOL.price_subtotal_incl);

          res.pos[store].ventas.reembolsos.amount_sub_total += parseFloat(pSOL.price_subtotal);
          res.pos[store].ventas.reembolsos.amount_tax += parseFloat(pSOL.price_subtotal_incl) - parseFloat(pSOL.price_subtotal);
          res.pos[store].ventas.reembolsos.amount_total += parseFloat(pSOL.price_subtotal_incl);
        }
      }
      let sOps: any = await client.query(
        `
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
            rp.id AS partner_id,
            ap.id AS payment_id,
            invoice.id AS invoice_id,
            am.name AS move_name,
            invoice.name AS invoice_name,
            rp.name AS partner_name,
            rpc.name AS category_name,
            ap.amount_company_currency_signed AS payment,
            invoice.amount_total AS invoice_amount,
            invoice.invoice_origin,
            invoice.move_type,
            invoice_aml.display_type,
            invoice_aml.name,
            invoice_aml.amount_currency,
            invoice_aml.quantity,
            (SELECT
                value_float
            FROM
                ir_property
            WHERE
                name = 'standard_price'
                AND res_id = 'product.product,' || invoice_aml.product_id
            LIMIT 1
            ) AS standard_cost,
            lp.purchase_price_unit,
            lp.purchase_price_subtotal,
            lp.purchase_price_total,
            lp.purchase_product_qty
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
        JOIN
            account_move_line invoice_aml ON invoice.id = invoice_aml.move_id
        LEFT JOIN
            last_purchase lp ON invoice_aml.id = lp.account_move_line_id
        WHERE
            am.date AT TIME ZONE 'UTC' AT TIME ZONE 'America/Mexico_City' >= date_trunc('month', TO_TIMESTAMP($1, 'YYYY-MM-DDTHH:MI:SSZ') AT TIME ZONE 'America/Mexico_City')
            AND am.date AT TIME ZONE 'UTC' AT TIME ZONE 'America/Mexico_City' < date_trunc('month', TO_TIMESTAMP($1, 'YYYY-MM-DDTHH:MI:SSZ') AT TIME ZONE 'America/Mexico_City') + interval '1 month'
            AND ap.payment_type = 'inbound' -- Pagos recibidos (cuentas por cobrar)
        ORDER BY
            am.date;
      `,
        [periodo],
      );
      sOps = sOps.rows;
      const sORes: any = {};
      for (let i = 0; i < sOps.length; i++) {
        const sOp = sOps[i];
        if (!sORes[sOp.partner_id]) {
          sORes[sOp.partner_id] = {};
        }
        if (!sORes[sOp.partner_id][sOp.move_name]) {
          sORes[sOp.partner_id][sOp.move_name] = {};
        }
        if (!sORes[sOp.partner_id][sOp.move_name][`${sOp.invoice_origin}_${sOp.invoice_name}`]) {
          sORes[sOp.partner_id][sOp.move_name][`${sOp.invoice_origin}_${sOp.invoice_name}`] = {};
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
            sORes[sOp.partner_id][sOp.move_name][`${sOp.invoice_origin}_${sOp.invoice_name}`][sOpRefunds[0].move_type] = sOpRefunds;
          }
        }
        if (!sORes[sOp.partner_id][sOp.move_name][`${sOp.invoice_origin}_${sOp.invoice_name}`][sOp.move_type]) {
          sORes[sOp.partner_id][sOp.move_name][`${sOp.invoice_origin}_${sOp.invoice_name}`][sOp.move_type] = {};
        }
        if (!sORes[sOp.partner_id][sOp.move_name][`${sOp.invoice_origin}_${sOp.invoice_name}`][sOp.move_type][sOp.display_type]) {
          sORes[sOp.partner_id][sOp.move_name][`${sOp.invoice_origin}_${sOp.invoice_name}`][sOp.move_type][sOp.display_type] = [];
        }
        sORes[sOp.partner_id][sOp.move_name][`${sOp.invoice_origin}_${sOp.invoice_name}`][sOp.move_type][sOp.display_type].push(sOp);
      }
      const partnerIds = Object.keys(sORes);
      for (let i = 0; i < partnerIds.length; i++) {
        const partnerPayments = sORes[partnerIds[i]];
        const paymentsKeys = Object.keys(partnerPayments);
        for (let j = 0; j < paymentsKeys.length; j++) {
          const payment = partnerPayments[paymentsKeys[j]];
          const invoicesKeys = Object.keys(payment);
          for (let k = 0; k < invoicesKeys.length; k++) {
            const invoice = payment[invoicesKeys[k]];
            invoice.ventas = 0;
            invoice.ventasIva = 0;
            invoice.ventasSubtotal = 0;
            invoice.costo = 0;
            invoice.costoTotIva = 0;
            invoice.costoIva = 0;
            invoice.remision = 0;
            invoice.reembolso = 0;
            invoice.reembolsoIVA = 0;
            let store = 'Tienda';
            if (String(invoice.out_invoice.payment_term[0].category_name.es_MX).toLowerCase().indexOf('jose') > -1) {
              store = 'Jose';
            } else if (String(invoice.out_invoice.payment_term[0].category_name.es_MX).toLowerCase().indexOf('manuel') > -1) {
              store = 'Manuel';
            }
            if (!res.sos[store]) {
              res.sos[store] = {
                ventas: { amount_sub_total: 0, amount_tax: 0, amount_total: 0, reembolsos: { amount_sub_total: 0, amount_tax: 0, amount_total: 0 } },
                costos: { amount_sub_total: 0, amount_tax: 0, amount_total: 0, remision: 0, facturado: { amount_total: 0, amount_tax: 0, amount_sub_total: 0 } },
              };
            }
            for (let l = 0; l < invoice.out_invoice.payment_term.length; l++) {
              const paymentTerm = invoice.out_invoice.payment_term[l];
              invoice.ventas += parseFloat(paymentTerm.amount_currency);
              invoice.ventasSubtotal += parseFloat(paymentTerm.amount_currency);
            }
            for (let l = 0; l < invoice.out_invoice.tax.length; l++) {
              const taxTerm = invoice.out_invoice.tax[l];
              invoice.ventasIva += parseFloat(taxTerm.amount_currency);
              invoice.ventasSubtotal += parseFloat(taxTerm.amount_currency);
            }
            invoice.proportion = (invoice.ventas * 100) / parseFloat(invoice.out_invoice.payment_term[0].invoice_amount);
            if (invoice.out_refund) {
              for (let l = 0; l < invoice.out_refund.length; l++) {
                const refund = invoice.out_refund[l];
                if (refund.display_type === 'payment_term') {
                  invoice.ventas += parseFloat(refund.amount_currency);
                  invoice.reembolso += parseFloat(refund.amount_currency);
                } else {
                  invoice.ventasIva += parseFloat(refund.amount_currency);
                  invoice.reembolsoIVA += parseFloat(refund.amount_currency);
                }
                invoice.ventasSubtotal += parseFloat(refund.amount_currency);
              }
            }
            if (invoice.out_invoice.product) {
              for (let l = 0; l < invoice.out_invoice.product.length; l++) {
                const prod = invoice.out_invoice.product[l];
                if (prod.purchase_price_unit) {
                  const ctU = parseFloat(prod.purchase_price_total) / parseFloat(prod.purchase_product_qty);
                  const ctIVA = parseFloat(prod.purchase_price_total) - parseFloat(prod.purchase_price_subtotal);
                  const ctIVAU = -ctIVA / parseFloat(prod.purchase_product_qty);
                  prod.cost = ctU * parseFloat(prod.quantity);
                  prod.cost_iva = ctIVAU * parseFloat(prod.quantity);
                  prod.cost_subtotal = prod.cost - prod.cost_iva;
                  if (prod.purchase_price_total === prod.purchase_price_subtotal) {
                    invoice.remision += prod.cost;
                  } else {
                    invoice.costoTotIva += prod.cost;
                    invoice.costoIva += prod.cost_iva;
                  }
                } else {
                  prod.cost += prod.standard_cost * parseFloat(prod.quantity);
                }
                invoice.costo += prod.cost;
              }
            }

            res.generales.ventas.amount_sub_total += invoice.ventasSubtotal || 0;
            res.generales.ventas.amount_tax += invoice.ventasIva || 0;
            res.generales.ventas.amount_total += invoice.ventas || 0;

            res.sos.ventas.amount_sub_total += invoice.ventasSubtotal || 0;
            res.sos.ventas.amount_tax += invoice.ventasIva || 0;
            res.sos.ventas.amount_total += invoice.ventas || 0;

            res.sos[store].ventas.amount_sub_total += invoice.ventasSubtotal || 0;
            res.sos[store].ventas.amount_tax += invoice.ventasIva || 0;
            res.sos[store].ventas.amount_total += invoice.ventas || 0;

            res.generales.ventas.reembolsos.amount_sub_total += invoice.reembolso + invoice.reembolsoIVA || 0;
            res.generales.ventas.reembolsos.amount_tax += invoice.reembolsoIVA || 0;
            res.generales.ventas.reembolsos.amount_total += invoice.reembolso || 0;

            res.sos.ventas.reembolsos.amount_sub_total += invoice.reembolso + invoice.reembolsoIVA || 0;
            res.sos.ventas.reembolsos.amount_tax += invoice.reembolsoIVA || 0;
            res.sos.ventas.reembolsos.amount_total += invoice.reembolso || 0;

            res.sos[store].ventas.reembolsos.amount_sub_total += invoice.reembolso + invoice.reembolsoIVA || 0;
            res.sos[store].ventas.reembolsos.amount_tax += invoice.reembolsoIVA || 0;
            res.sos[store].ventas.reembolsos.amount_total += invoice.reembolso || 0;

            res.generales.costos.amount_sub_total += invoice.costo - invoice.costoIva || 0;
            res.generales.costos.amount_tax += invoice.costoIva || 0;
            res.generales.costos.amount_total += invoice.costo || 0;

            res.sos.costos.amount_sub_total += invoice.costo - invoice.costoIva || 0;
            res.sos.costos.amount_tax += invoice.costoIva || 0;
            res.sos.costos.amount_total += invoice.costo || 0;

            res.sos[store].costos.amount_sub_total += invoice.costo - invoice.costoIva || 0;
            res.sos[store].costos.amount_tax += invoice.costoIva || 0;
            res.sos[store].costos.amount_total += invoice.costo || 0;

            res.generales.costos.facturado.amount_sub_total += invoice.costoTotIva - invoice.costoIva || 0;
            res.generales.costos.facturado.amount_tax += invoice.costoIva || 0;
            res.generales.costos.facturado.amount_total += invoice.costoTotIva || 0;

            res.sos.costos.facturado.amount_sub_total += invoice.costoTotIva - invoice.costoIva || 0;
            res.sos.costos.facturado.amount_tax += invoice.costoIva || 0;
            res.sos.costos.facturado.amount_total += invoice.costoTotIva || 0;

            res.sos[store].costos.facturado.amount_sub_total += invoice.costoTotIva - invoice.costoIva || 0;
            res.sos[store].costos.facturado.amount_tax += invoice.costoIva || 0;
            res.sos[store].costos.facturado.amount_total += invoice.costoTotIva || 0;

            res.generales.costos.remision += invoice.remision;
            res.sos.costos.remision += invoice.remision;
            res.sos[store].costos.remision += invoice.remision;
          }
        }
      }
      logL('AppsVilleBD - processPG - res', res);
      await resEvent('processPG', channel, event, res);
      client.release();
      return true;
    } catch (error) {
      displayError('processPG', error);
      return false;
    }
  });

  ipcMain.on('getCostProducts', async (event, channel) => {
    const client = await pool.connect();
    try {
      initIpc('getCostProducts');
      process.stdout.write('\x1Bc');
      console.log('++++++++   getCostProducts init   ++++++++++++++++');
      const { rows: accountMoveLines } = await client.query(`
        SELECT
           am.invoice_origin AS am_invoice_origin,
           am.move_type AS am_move_type,
           aml.display_type,
           am.name AS am_name,
           am.invoice_partner_display_name AS am_invoice_partner_display_name,
           am.amount_total_in_currency_signed AS am_amount_total_in_currency_signed,
           aml.date,
           aml.amount_currency,
           aml.quantity,
           aml.price_unit,
           aml.price_subtotal,
           aml.price_total,
           aml.product_id,
           pp.default_code,
           pp.barcode,
           pt.name->>'es_MX' AS pt_name
         FROM
           account_move am
         JOIN
           account_move_line aml ON aml.move_id = am.id
         LEFT JOIN
           product_product pp ON aml.product_id = pp.id
         LEFT JOIN
           product_template pt ON pt.id = pp.product_tmpl_id
         WHERE
           am.move_type IN ('in_refund', 'in_invoice')
           AND NOT (am.move_type = 'in_refund' AND aml.display_type = 'product')
         ORDER BY
           am_invoice_origin;
       `);
      const res: any = {};
      for (let i = 0; i < accountMoveLines.length; i++) {
        const accountMoveLine = accountMoveLines[i];
        if (!res[accountMoveLine.display_type]) {
          res[accountMoveLine.display_type] = {};
        }
      }

      logL('AppsVilleBD - getCostProducts - res', res);
      await resEvent('getCostProducts', channel, event, []);
    } catch (error) {
      displayError('getCostProducts', error);
    } finally {
      client.release();
    }
  });

  ipcMain.on('getProducts', async (event, channel, { filters = {}, sort = {}, pagination = { page: 0, rowsPerPage: 50 } }) => {
    const client = await pool.connect();
    try {
      initIpc('getProducts');
      console.log('++++++++   getProducts init   ++++++++++++++++');
      await mdb.connect();
      const db = mdb.db(mdbName);
      const collection = db.collection('Productos');

      // Validate pagination inputs
      const { page, rowsPerPage } = pagination;
      if (typeof page !== 'number' || typeof rowsPerPage !== 'number') {
        throw new TypeError('Invalid pagination parameters');
      }

      // Prepare filter conditions for PostgreSQL
      const pgFilterConditions = [];
      const filterValues = [];

      if (filters.name) {
        pgFilterConditions.push("pt.name->>'es_MX' ILIKE $1");
        filterValues.push(`%${filters.name}%`);
      }
      if (filters.default_code) {
        pgFilterConditions.push('pp.default_code ILIKE $2');
        filterValues.push(`%${filters.default_code}%`);
      }
      if (filters.barcode) {
        pgFilterConditions.push('pp.barcode ILIKE $3');
        filterValues.push(`%${filters.barcode}%`);
      }

      const pgFilterQuery = pgFilterConditions.length ? `AND ${pgFilterConditions.join(' AND ')}` : '';

      // Prepare sorting
      const pgSortQuery = sort.key ? `ORDER BY ${sort.key} ${sort.order.toUpperCase()}` : '';

      // Calculate pagination
      const offset = page * rowsPerPage;
      const pgPaginationQuery = `LIMIT ${rowsPerPage} OFFSET ${offset}`;

      const query = `
        SELECT
          pp.id,
          pp.default_code,
          pp.barcode,
          pt.name->>'es_MX' AS name
        FROM
          product_product pp
        JOIN
          product_template pt ON pt.id = pp.product_tmpl_id
        WHERE
          pp.active
        ${pgFilterQuery}
        ${pgSortQuery}
        ${pgPaginationQuery}
      `;

      const { rows: products } = await client.query(query, filterValues);
      const productIds = products.map((product) => product.id);

      // Prepare filter conditions for MongoDB
      const mongoFilters = { product_id: { $in: productIds } };
      if (filters.hasNegativeProfit !== undefined) {
        mongoFilters.hasNegativeProfit = filters.hasNegativeProfit;
      }
      if (filters.lowestProfit !== undefined) {
        mongoFilters.lowestProfit = { $gte: filters.lowestProfit };
      }

      // Fetch from MongoDB
      const productsMongo = await collection.find(mongoFilters).toArray();
      const productsMongoMap = productsMongo.reduce((map, productMongo) => {
        map[productMongo.product_id] = productMongo;
        return map;
      }, {});

      // Merge PostgreSQL and MongoDB data
      const mergedProducts = products.map((product) => ({
        ...product,
        ...productsMongoMap[product.id],
      }));

      await resEvent('getProducts', channel, event, mergedProducts);
    } catch (error) {
      console.error('getProducts -- Error', error);
      displayError('getProducts', error);
    } finally {
      client.release();
      await mdb.close();
    }
  });
}
