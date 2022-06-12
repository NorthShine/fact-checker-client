import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { TrustBadgeModal } from 'components/modals/TrustBadge';
import React from 'react';
import { closeModalAction } from '../../../store/reducers/modal/modalReducer';
import { getTrustBadgeScriptAction } from '../../../store/reducers/trustbadge/actionCreators';

const headers = {
  [getTrustBadgeScriptAction.fulfilled.type]: 'Код Trust Badge'
};

const contents = {
  [getTrustBadgeScriptAction.fulfilled.type]: <TrustBadgeModal />
};

export const Modal: React.FC = () => {
  const { open, type } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closeModalAction());
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      {type && <DialogTitle>{headers[type]}</DialogTitle>}
      {type && contents[type]}
    </Dialog>
  );
};