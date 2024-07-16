/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ListItemButton, ListItemText } from '@mui/material';
import { AppDispatch } from '../States/Store';
import { setIsUtilsBar, setLoading } from '../States/UiSlice';
import ipc from '../Utils/Ipc';
import aS from '../Utils/AppService';

function EstadoResultados() {
  const dispatch = useDispatch<AppDispatch>();

  const processPG = async () => {
    try {
      dispatch(setLoading(true));
      const res = await ipc.q('processPG');
      aS.log('EstadoResultados - processPG - res', res);
    } catch (error) {
      aS.log('EstadoResultados - processPG - error', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    dispatch(setIsUtilsBar({ show: true }));
    processPG();
  }, []);

  return (
    <ListItemButton component="a" href="#simple-list">
      <ListItemText primary="Spam" />
    </ListItemButton>
  );
}

export default EstadoResultados;
