import { createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import GameDetailPage from './pages/GameDetailPage';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'game/:id', element: <GameDetailPage /> },
    ],
  },
]);

export default Routes;
