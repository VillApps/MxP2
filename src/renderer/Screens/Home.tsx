/* eslint-disable @typescript-eslint/no-unused-vars */
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

  useEffect(() => {
    dispatch(setIsUtilsBar({ show: false }));
  }, []);
  return <Box>Home</Box>;
}

export default Home;
