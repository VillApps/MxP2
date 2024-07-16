/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../States/Store';
import { initViAUserEx, setLoading } from '../States/UiSlice';
import aS from '../Utils/AppService';

function AuthInit() {
  const dispatch = useDispatch<AppDispatch>();

  const init = async () => {
    try {
      dispatch(setLoading(true));
      await dispatch(initViAUserEx());
      aS.log('AuthInit - init - start', 'start');
    } catch (error) {
      aS.log('AuthInit - init - error', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    init();
  }, []);

  return <div>...</div>;
}

export default AuthInit;
