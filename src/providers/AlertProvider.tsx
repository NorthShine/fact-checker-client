import React, { useState, createContext } from 'react';
import { AlertColor } from '@mui/material';
import { Alert } from '../components/Alert';

interface AlertProviderProps {
  children: React.ReactNode;
}

interface Context {
  open: boolean;
  setOpen: (value: boolean) => void;
  message: string;
  setMessage: (value: string) => void;
  severity: AlertColor;
  setSeverity: (value: AlertColor) => void;
}

export const AlertContext = createContext<Context>({
  open: false,
  setOpen: () => { },
  message: '',
  setMessage: () => { },
  severity: 'info',
  setSeverity: () => { }
});

export const AlertProvider = ({ children }: AlertProviderProps) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<AlertColor>('info');

  const context = {
    open,
    setOpen,
    message,
    setMessage,
    severity,
    setSeverity
  };

  return (
    <AlertContext.Provider value={context}>
      {children}
      <Alert />
    </AlertContext.Provider>
  );
};
