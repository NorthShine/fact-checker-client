import { Home } from 'pages/Home';
import { Login } from 'pages/Login';
import { Result } from 'pages/Result';
import { Main } from '../layouts/Main';

export default [
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/', element: <Home />
      },
      {
        path: '/login', element: <Login />
      },
      {
        path: '/result', element: <Result />
      }
    ]
  }
];
