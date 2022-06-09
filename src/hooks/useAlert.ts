import { useContext } from 'react';
import { AlertContext } from '../providers/AlertProvider';

export const useAlert = () => {
  const {
    open,
    setOpen,
    message,
    setMessage,
    severity,
    setSeverity
  } = useContext(AlertContext);

  function warning(msg: string) {
    setOpen(true);
    setMessage(msg ?? 'Warning');
    setSeverity('warning');
  }

  function error(msg: string) {
    setOpen(true);
    setMessage(msg ?? 'Error');
    setSeverity('error');
  }

  function info(msg: string) {
    setOpen(true);
    setMessage(msg ?? 'Info');
    setSeverity('info');
  }

  function success(msg: string) {
    setOpen(true);
    setMessage(msg ?? 'Success');
    setSeverity('success');
  }

  return {
    open,
    message,
    severity,
    setOpen,
    setMessage,
    setSeverity,
    warning,
    success,
    info,
    error
  };
};
