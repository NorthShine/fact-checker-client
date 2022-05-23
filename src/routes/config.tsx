import { MainLayout } from 'components/MainLayout';
import { Home } from 'pages/Home';
import { Outlet } from 'react-router-dom';

export default [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Outlet />,
        children: [
          {
            path: '/', element: <Home />
          }
        ]
      }
    ]
  }
];
