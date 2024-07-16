import { createHashRouter } from 'react-router-dom';
import Home from '../Screens/Home';
import ListModel from '../Screens/ListModel';
import NoPermiso from '../Screens/NoPermiso';
import UpsertModel from '../Screens/UpsertModel';
import ProtectedLogic from '../Components/ProtectedLogic';
import EstadoResultados from '../Screens/EstadoResultados';

const router = createHashRouter([
  {
    path: '/',
    element: (
      <ProtectedLogic viewAccess="Home">
        <Home />
      </ProtectedLogic>
    ),
    errorElement: <NoPermiso />,
    index: true,
  },
  {
    path: '/ListModel/:model',
    element: (
      <ProtectedLogic viewAccess="ListModel">
        <ListModel />
      </ProtectedLogic>
    ),
  },
  {
    path: '/UpsertModel/:model/:itemId',
    element: (
      <ProtectedLogic viewAccess="UpsertModel">
        <UpsertModel />
      </ProtectedLogic>
    ),
  },
  {
    path: '/EstadoResultados',
    element: (
      <ProtectedLogic viewAccess="EstadoResultados">
        <EstadoResultados />
      </ProtectedLogic>
    ),
  },
]);

export default router;
