import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { signOut } from 'aws-amplify/auth';
import { useDispatch } from 'react-redux';
import aS from '../Utils/AppService';
import { AppDispatch } from '../States/Store';
import { setViAUserEx } from '../States/UiSlice';

function NoPermiso() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const error = useRouteError();
  aS.log('NoPermiso - error', error);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'primary',
      }}
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="h6" sx={{ textAlign: 'center' }}>
        La sección que buscas no existe o no tienes permisos para acceder,
        <br />
        contacta a tu administrador.
      </Typography>
      <br />
      <Button
        variant="contained"
        onClick={() => {
          navigate('/');
        }}
      >
        Regresa al inicio
      </Button>
      <br />
      <Button
        variant="contained"
        onClick={() => {
          dispatch(setViAUserEx({}));
          signOut();
        }}
      >
        Salir
      </Button>
    </Box>
  );
}

export default NoPermiso;
