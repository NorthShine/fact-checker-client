import { AlertColor } from '@mui/material';
import { createAction, createReducer, PayloadAction } from '@reduxjs/toolkit';
import { ApiResponse } from 'types';
import { getAuthAction } from '../auth/actionCreators';
import { checkTextAction, checkUrlAction } from '../news/actionCreators';
import { addToWhitelistAction, deleteWhitelistItemAction, getWhitelistItemsAction } from '../whitelist/actionCreators';

interface AlertState {
  open: boolean;
  message: string;
  severity: AlertColor
}

const initialState: AlertState = {
  open: false,
  message: '',
  severity: 'info'
};

interface AlertPayload {
  severity: AlertColor;
  message: string;
}

export const openAlertAction = createAction<AlertPayload>('alert/openAlert');
export const closeAlertAction = createAction('alert/closeAlert');

const setApiErrorAlert = (
  state: AlertState,
  action: PayloadAction<ApiResponse | undefined>
) => {
  const message = action.payload?.message;
  state.message = message || 'Error';
  state.open = true;
  state.severity = 'error';
};

export const alertReducer = createReducer(initialState, (builder) => {
  builder.addCase(openAlertAction, (state, action) => {
    const { severity, message } = action.payload;
    state.open = true;
    state.severity = severity;
    state.message = message;
  });
  builder.addCase(closeAlertAction, (state) => {
    state.open = false;
  });

  // alert listeners

  builder.addCase(getAuthAction.rejected, setApiErrorAlert);

  builder.addCase(getWhitelistItemsAction.rejected, setApiErrorAlert);
  builder.addCase(addToWhitelistAction.rejected, setApiErrorAlert);
  builder.addCase(deleteWhitelistItemAction.rejected, setApiErrorAlert);

  builder.addCase(checkUrlAction.rejected, setApiErrorAlert);
  builder.addCase(checkTextAction.rejected, setApiErrorAlert);
});
