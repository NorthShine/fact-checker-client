import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface PrivateRouteProps {
  element: React.ReactElement;
}

export const PrivateElement: React.FC<PrivateRouteProps> = ({ element }) => {
  const { isAuth, status } = useAuth();

  if (isAuth) {
    return element;
  }

  return status === 'ready' ? <Navigate to="/login" replace /> : null;
};
