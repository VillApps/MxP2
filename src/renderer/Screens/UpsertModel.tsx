/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Box, Button, Chip, Container, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { generateClient } from 'aws-amplify/api';
import aS from '../Utils/AppService';
import { AppDispatch } from '../States/Store';
import { setIsUtilsBar, setLoading } from '../States/UiSlice';
import { schema as schemaAWS } from '../../models/schema';
import * as queriesAWS from '../../graphql/queries';
import * as mutationsAWS from '../../graphql/mutations';

function UpsertModel() {
  const { model, itemId }: any = useParams();
  const [mutations, setMutations]: any = useState(null);
  const [queries, setQueries]: any = useState(null);
  const [schema, setSchema]: any = useState(null);
  const [item, setItem]: any = useState(null);
  const [toSave, setToSave]: any = useState(false);
  const [itemsOptions, setTItemsOptions]: any = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const client = generateClient();
  const navigate = useNavigate();
  const breadCrumbs = useSelector((state: any) => state.Ui.breadCrumbs);
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const lcfc = (str: string) => {
    if (!str) return str;
    return `${str.charAt(0).toLowerCase() + str.slice(1)}`;
  };

  const getRelation = async () => {
    try {
      dispatch(setLoading(true));
      const models = Object.keys(schema.models[model].fields);
      const itemsOptionsL = { ...itemsOptions };
      for (let i = 0; i < models.length; i++) {
        const modelKey = models[i];
        if (schema.models[model].fields[modelKey].isArray) {
          const optionsQueryName = `list${schema.models[modelKey].pluralName}`;
          const options: any = await client.graphql({ query: queries[optionsQueryName] });
          itemsOptionsL[modelKey] = options.data[optionsQueryName].items;
        }
      }
      setTItemsOptions(itemsOptionsL);
    } catch (error) {
      aS.log('UpsertModel - getRelation - error', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const fetchItem = async () => {
    try {
      dispatch(setLoading(true));
      const queryName = `get${model}`;
      const response: any = await client.graphql({
        query: queries[queryName],
        variables: { id: itemId },
      });

      setItem(response.data[queryName]);
    } catch (error) {
      aS.log('UpsertModel - fetchItem - error', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const newItem = () => {
    const itemL: any = {};
    const fields = Object.keys(schema.models[model].fields);
    for (let i = 0; i < fields.length; i++) {
      if (schema.models[model].fields[fields[i]].isArray) {
        itemL[fields[i]] = { items: [] };
      } else {
        itemL[fields[i]] = '';
      }
    }
    setItem(itemL);
  };

  const setItemKey = (key: string, value: any) => {
    const itemL = { ...item };
    itemL[key] = value;
    setItem(itemL);
    setToSave(true);
  };

  const saveDB = async () => {
    try {
      dispatch(setLoading(true));
      if (!item.id) {
        const queryCreate = `create${model}`;
        const res = await aS.upsertModel(dispatch, mutations[queryCreate], item);
        aS.breadCrumbsGoTo(dispatch, navigate, breadCrumbs, `/UpsertModel/${model}/${res.data[queryCreate].id}`);
      } else {
        const queryUpdate = `update${model}`;
        await aS.upsertModel(dispatch, mutations[queryUpdate], item);
      }
      setToSave(false);
    } catch (error) {
      aS.log('UpsertModel - saveDB - error', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const addRelation = async (key: string, event: any) => {
    try {
      dispatch(setLoading(true));
      if (itemId === 'new') {
        await saveDB();
      } else {
        let exist = false;
        for (let i = 0; i < item[key].items.length; i++) {
          if (event.id === item[key].items[i][`${lcfc(key)}Id`]) {
            exist = true;
          }
        }
        if (!exist) {
          const relationModel = schema.models[model].fields[key].type.model;
          const createRM = `create${relationModel}`;
          await aS.upsertModel(dispatch, mutations[createRM], {
            [`${lcfc(model)}Id`]: itemId,
            [`${lcfc(key)}Id`]: event.id,
          });
        }
        await fetchItem();
      }
    } catch (error) {
      aS.log('UpsertModel - fetchItem - error', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const deleteRelation = async (key: string, itm: any) => {
    try {
      dispatch(setLoading(true));
      const relationModel = schema.models[model].fields[key].type.model;
      const deleteRM = `delete${relationModel}`;
      await client.graphql({
        query: mutations[deleteRM],
        variables: { input: { id: itm.id } },
      });
      await fetchItem();
    } catch (error) {
      aS.log('UpsertModel - fetchItem - error', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (schema && queries && mutations) {
      dispatch(
        setIsUtilsBar({
          show: true,
          model,
          btns: true,
          btnsFns: [
            { name: 'Nuevo', fn: newItem },
            { name: 'Editar', fn: saveDB },
          ],
        }),
      );
      if (itemId !== 'new') {
        fetchItem();
      } else {
        newItem();
      }
      getRelation();
    }
  }, [schema, queries, mutations, model, itemId]);

  useEffect(() => {
    setSchema(schemaAWS);
    setQueries(queriesAWS);
    setMutations(mutationsAWS);
  }, []);

  return (
    <Container>
      <Stack>
        {item &&
          Object.keys(item).map((key: string) => (
            <Box key={`key${key}`} flex={1}>
              {!itemsOptions[key] ? (
                <TextField
                  sx={{ width: '100%' }}
                  disabled={key === 'id' || key === 'owner' || key === 'updatedAt' || key === 'createdAt' || key === '__typename'}
                  size="small"
                  label={key}
                  variant="outlined"
                  value={item[key] || ''}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setItemKey(key, event.target.value);
                  }}
                />
              ) : (
                <Box sx={{ padding: '10px', border: '1px solid #777', borderRadius: 2, marginY: '5px' }}>
                  <Typography color="primary" sx={{ marginBottom: '5px' }}>
                    {key}
                  </Typography>
                  {item[key].items.map((itm: any) => (
                    <Chip
                      key={`itmIndex${itm.id}`}
                      label={itm[lcfc(key)].name}
                      color="primary"
                      sx={{ marginX: '2px' }}
                      onDelete={() => {
                        deleteRelation(key, itm);
                      }}
                    />
                  ))}
                  <FormControl size="small" sx={{ width: '100%' }}>
                    <InputLabel id={`slect_key_${key}`}>{key}</InputLabel>
                    <Select labelId={`slect_key_${key}`} label={key} value="" MenuProps={MenuProps}>
                      <MenuItem value="">
                        <em>...</em>
                      </MenuItem>
                      {itemsOptions[key].map((itemOpt: any) => (
                        <MenuItem
                          key={itemOpt.id}
                          value={itemOpt}
                          onClick={() => {
                            addRelation(key, itemOpt);
                          }}
                        >
                          {itemOpt.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              )}
            </Box>
          ))}
        <br />
        {toSave && (
          <Button variant="contained" color="success" size="large" onClick={saveDB}>
            {itemId !== 'new' ? 'Guardar' : 'Crear'}
          </Button>
        )}
      </Stack>
    </Container>
  );
}

export default UpsertModel;
