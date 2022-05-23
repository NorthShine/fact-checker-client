import { Home } from 'pages/Home';
import { Outlet } from 'react-router-dom';
import { Main } from '../layouts/Main';

export default [
  {
    path: '/',
    element: <Main />,
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
