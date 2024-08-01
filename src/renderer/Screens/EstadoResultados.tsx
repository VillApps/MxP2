/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppBar, Box, Button, colors, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import dayjs, { Dayjs } from 'dayjs';
import { AppDispatch } from '../States/Store';
import { setIsUtilsBar, setLoading } from '../States/UiSlice';
import ipc from '../Utils/Ipc';
import aS from '../Utils/AppService';

function EstadoResultados() {
  const [periodo, setPeriodo]: any = React.useState<Dayjs | null>(dayjs().startOf('day'));
  const dispatch = useDispatch<AppDispatch>();

  const processPG = async () => {
    try {
      dispatch(setLoading(true));
      const res = await ipc.q('processPG', periodo.toISOString());
      aS.log('EstadoResultados - processPG - res', res);
    } catch (error) {
      aS.log('EstadoResultados - processPG - error', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    dispatch(setIsUtilsBar({ show: false }));
  }, []);

  return (
    <Box>
      <AppBar position="static" color="secondary">
        <Grid container flexDirection="row" justifyContent="center" alignItems="flex-end">
          <Grid>
            <Box sx={{ paddingX: '20px', paddingY: '10px' }}>
              <Typography variant="h6" color={colors.grey[700]}>
                Periodo mensual:
              </Typography>
              <DatePicker value={periodo} onChange={(newValue) => setPeriodo(newValue)} views={['year', 'month']} />
            </Box>
          </Grid>
          <Grid sx={{ paddingX: '20px', paddingY: '15px' }}>
            <Button variant="contained" onClick={processPG} size="large">
              Crear reporte
            </Button>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
}

export default EstadoResultados;
