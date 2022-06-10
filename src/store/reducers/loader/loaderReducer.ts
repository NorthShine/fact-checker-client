import { createAction, createReducer } from '@reduxjs/toolkit';
import { getAuthAction } from '../auth/actionCreators';
import { addToWhitelistAction, deleteWhitelistItemAction, getWhitelistItemsAction } from '../whitelist/actionCreators';

interface LoaderState {
  loading: boolean
}

const initialState: LoaderState = {
  loading: false
};

export const setLoadingAction = createAction<boolean>('loader/setLoading');

const startLoading = (state: LoaderState) => {
  state.loading = true;
};

const stopLoading = (state: LoaderState) => {
  state.loading = false;
};

export const loaderReducer = createReducer(initialState, (builder) => {
  builder.addCase(setLoadingAction, (state, action) => {
    state.loading = action.payload;
  });

  // custom loader cases
  builder.addCase(getAuthAction.pending, startLoading);
  builder.addCase(getAuthAction.rejected, stopLoading);

  builder.addCase(getWhitelistItemsAction.pending, startLoading);
  builder.addCase(getWhitelistItemsAction.rejected, stopLoading);

  builder.addCase(addToWhitelistAction.pending, startLoading);
  builder.addCase(addToWhitelistAction.rejected, stopLoading);

  builder.addCase(deleteWhitelistItemAction.pending, startLoading);
  builder.addCase(deleteWhitelistItemAction.rejected, stopLoading);
});
