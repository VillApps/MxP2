/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../States/Store';
import { setIsUtilsBar, setLoading } from '../States/UiSlice';
import ipc from '../Utils/Ipc';
import aS from '../Utils/AppService';

function Home() {
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
    dispatch(setIsUtilsBar({ show: false }));
    processPG();
  }, []);
  return <Box>Home</Box>;
}

export default Home;
