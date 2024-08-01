import { createHashRouter } from 'react-router-dom';
import Home from '../Screens/Home';
import ListModel from '../Screens/ListModel';
import NoPermiso from '../Screens/NoPermiso';
import UpsertModel from '../Screens/UpsertModel';
import ProtectedLogic from '../Components/ProtectedLogic';
import EstadoResultados from '../Screens/EstadoResultados';
import CostosProductos from '../Screens/CostosProductos';

const router = createHashRouter([
  {
    path: '/',
    element: (
      <ProtectedLogic viewAccess="Home">
        <Home />
      </ProtectedLogic>
    ),
    index: true,
  },
  {
    path: '/Home',
    element: (
      <ProtectedLogic viewAccess="Home">
        <Home />
      </ProtectedLogic>
    ),
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
      <ProtectedLogic viewAccess="Estado de resultados">
        <EstadoResultados />
      </ProtectedLogic>
    ),
  },
  {
    path: '/CostosProductos',
    element: (
      <ProtectedLogic viewAccess="Productos">
        <CostosProductos />
      </ProtectedLogic>
    ),
  },
]);

export default router;
