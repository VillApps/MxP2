import { Backdrop, Box, CircularProgress } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import NavBar from './NavBar';
import UtilsBar from './UtilsBar';

function Screen({ view }: any) {
  const loading = useSelector((state: any) => state.Ui.loading);
  const isUtilsBar = useSelector((state: any) => state.Ui.isUtilsBar);
  return (
    <Box>
      {loading && (
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <NavBar />
      {isUtilsBar.show && (
        <>
          <UtilsBar />
          <br />
        </>
      )}
      {view}
    </Box>
  );
}

export default Screen;
