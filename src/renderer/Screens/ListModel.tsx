/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import { generateClient } from 'aws-amplify/api';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import aS from '../Utils/AppService';
import { schema as schemaAWS } from '../../models/schema';
import * as queriesAWS from '../../graphql/queries';
import * as mutationsAWS from '../../graphql/mutations';
import { AppDispatch } from '../States/Store';
import { setBreadCrumbs, setIsUtilsBar, setLoading } from '../States/UiSlice';

function ListModel() {
  const { model }: any = useParams();
  const [mutations, setMutations]: any = useState(null);
  const [queries, setQueries]: any = useState(null);
  const [schema, setSchema]: any = useState(null);
  const [items, setItems]: any = useState(null);
  const [columns, setColumns]: any = useState();
  const [hasRelation, setHasRelation]: any = useState(false);
  const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const client = generateClient();

  const lcfc = (str: string) => {
    if (!str) return str;
    return `${str.charAt(0).toLowerCase() + str.slice(1)}`;
  };

  const fetchItems = async () => {
    try {
      dispatch(setLoading(true));
      const queryName = `list${schema.models[model].pluralName}`;
      const response: any = await client.graphql({
        query: queries[queryName],
      });
      const itemsL: any = [];
      for (let i = 0; i < response.data[queryName].items.length; i++) {
        const elL: any = {};
        const item = response.data[queryName].items[i];
        for (const key in item) {
          if (item.hasOwnProperty(key)) {
            const el = item[key];
            if (typeof el === 'object' && el && el.items) {
              setHasRelation(true);
              elL[key] = el.items.map((itemL: any) => {
                return itemL[lcfc(key)].name;
              });
            } else {
              elL[key] = el;
            }
          }
        }
        itemsL.push(elL);
      }
      setItems(itemsL);
    } catch (error) {
      aS.log('ListModel - fetchItems - error', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const newItem = () => {
    dispatch(setBreadCrumbs([...[`/ListModel/${model}`]]));
    navigate(`/UpsertModel/${model}/new`);
  };

  const deleteItem = async () => {
    if (hasRelation && schema.models[model].fields.hasOwnProperty('owner')) {
      alert('Borra primero sus elementos relacionados');
      return;
    }
    if (confirm('¿Estas seguro de borrar los elementos seleccionados?')) {
      try {
        dispatch(setLoading(true));
        const queryName = `delete${model}`;
        for (let i = 0; i < rowSelectionModel.length; i++) {
          const itemId = rowSelectionModel[i];
          await client.graphql({
            query: mutations[queryName],
            variables: { input: { id: itemId } },
          });
        }
      } catch (error) {
        aS.log('ListModel - deleteItem - error', error);
      } finally {
        await fetchItems();
        dispatch(setLoading(false));
      }
    }
  };

  useEffect(() => {
    setItems(null);
    if (schema && queries && model) {
      dispatch(setIsUtilsBar({ show: true, model, actions: true, actionsFns: [{ name: 'Eliminar', fn: deleteItem }], btns: true, btnsFns: [{ name: 'Nuevo', fn: newItem }] }));
      const columnsL: GridColDef[] = Object.keys(schema.models[model].fields).map((key) => ({
        field: key,
        width: 180,
      }));
      setColumns(columnsL);
      fetchItems();
    }
  }, [schema, queries, model]);

  useEffect(() => {
    setSchema(schemaAWS);
    setQueries(queriesAWS);
    setMutations(mutationsAWS);
  }, []);

  return (
    <>
      {columns && items && (
        <DataGrid
          checkboxSelection
          disableRowSelectionOnClick
          onRowClick={(params: any) => {
            dispatch(setBreadCrumbs([...[`/ListModel/${model}`]]));
            navigate(`/UpsertModel/${model}/${params.id}`);
          }}
          onRowSelectionModelChange={(newRowSelectionModel) => {
            setRowSelectionModel(newRowSelectionModel);
          }}
          rowSelectionModel={rowSelectionModel}
          rows={items}
          columns={columns}
        />
      )}
    </>
  );
}

export default ListModel;
