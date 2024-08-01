/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-array-index-key */
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Authenticator, useTheme, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import router from './Utils/Routes';
import { Box, colors, Typography } from '@mui/material';
import AuthInit from './Components/AuthInit';
import { useSelector } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/es-mx';
import aS from './Utils/AppService';
import { useEffect } from 'react';

export function App() {
  const ViAUserEx = useSelector((state: any) => state.Ui.ViAUserEx);

  const components = {
    Header() {
      const { tokens } = useTheme();
      return (
        <Box marginTop="140px">
          <Typography variant="h4" color={colors.grey[700]} sx={{ textAlign: 'center', marginBottom: '10px' }}>
            VillApps
          </Typography>
          <Typography variant="h5" color={colors.grey[600]} sx={{ textAlign: 'center', marginBottom: '20px' }}>
            Mas x Pieza
          </Typography>
        </Box>
      );
    },
  };

  // useEffect(() => {
  //   aS.log('App - useEffect - ViAUserEx', ViAUserEx);
  // }, [ViAUserEx]);

  return (
    <Authenticator components={components}>
      {ViAUserEx.id ? (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es-mx">
          <RouterProvider router={router} />
        </LocalizationProvider>
      ) : (
        <AuthInit />
      )}
    </Authenticator>
  );
}
export default App;
