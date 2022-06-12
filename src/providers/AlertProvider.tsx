import React from 'react';
import { Alert } from '../components/common/Alert';

interface AlertProviderProps {
  children: React.ReactNode;
}

export const AlertProvider = ({ children }: AlertProviderProps) => (
  <>
    {children}
    <Alert />
  </>
);
