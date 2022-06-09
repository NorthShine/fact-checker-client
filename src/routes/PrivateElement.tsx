import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface PrivateRouteProps {
  element: React.ReactElement;
}

export const PrivateElement: React.FC<PrivateRouteProps> = ({ element }) => {
  const { isAuth, requesting } = useAuth();

  if (isAuth) {
    return element;
  }

  return requesting
    ? null
    : <Navigate to="/login" replace />;
};
