import { Snackbar, SnackbarOrigin, Alert as Notification } from '@mui/material';
import { useAlert } from 'hooks/useAlert';
import { useMemo } from 'react';
import { DEFAULT_ALERT_TIMEOUT } from '../../constants';

export const Alert = () => {
  const { open, setOpen, message, severity } = useAlert();

  const position: SnackbarOrigin = useMemo(() => ({
    vertical: 'top',
    horizontal: 'center'
  }), []);

  const handleClose = () => setOpen(false);

  return (
    <Snackbar
      open={open}
      autoHideDuration={DEFAULT_ALERT_TIMEOUT}
      onClose={() => setOpen(false)}
      anchorOrigin={position}
    >
      <Notification onClose={handleClose} severity={severity}>
        {message}
      </Notification>
    </Snackbar>
  );
};
