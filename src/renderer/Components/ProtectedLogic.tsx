/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NoPermiso from '../Screens/NoPermiso';
import Screen from './Screen';
import { AppDispatch } from '../States/Store';
import { setNavParams } from '../States/UiSlice';

function ProtectedLogic({ children, viewAccess }: any) {
  const ViAUserEx = useSelector((state: any) => state.Ui.ViAUserEx);
  const [access, setAccess]: any = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    let menus: any = {};
    Object.keys(ViAUserEx.groups).forEach((groupId) => {
      Object.keys(ViAUserEx.groups[groupId].views).forEach((viewId) => {
        if (viewAccess === ViAUserEx.groups[groupId].views[viewId].name) {
          setAccess(true);
          menus = { ...menus, ...ViAUserEx.groups[groupId].views[viewId].menus };
        }
      });
    });
    dispatch(setNavParams(menus));
  }, []);

  return <>{access ? <Screen view={children} /> : <NoPermiso />}</>;
}

export default ProtectedLogic;
