import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addToWhitelistAction, deleteWhitelistItemAction, getWhitelistItemsAction } from './actionCreators';
import { ApiError, WhitelistItem } from '../../../types';

interface WhitelistState {
  items: WhitelistItem[];
  requesting: boolean;
  error: ApiError | null | undefined;
}

const initialState: WhitelistState = {
  items: [],
  requesting: true,
  error: null
};

export const whitelistSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getWhitelistItemsAction.fulfilled,
      (state, action: PayloadAction<WhitelistItem[]>) => {
        state.requesting = false;
        state.error = null;
        state.items = action.payload;
      }
    );
    builder.addCase(getWhitelistItemsAction.pending, (state) => {
      state.requesting = true;
    });
    builder.addCase(getWhitelistItemsAction.rejected, (state, action) => {
      state.requesting = false;
      state.error = action.payload;
    });

    builder.addCase(
      addToWhitelistAction.fulfilled,
      (state, action: PayloadAction<WhitelistItem>) => {
        state.requesting = false;
        state.error = null;
        state.items.push(action.payload);
      }
    );
    builder.addCase(addToWhitelistAction.pending, (state) => {
      state.requesting = true;
    });
    builder.addCase(addToWhitelistAction.rejected, (state, action) => {
      state.requesting = false;
      state.error = action.payload;
    });

    builder.addCase(
      deleteWhitelistItemAction.fulfilled,
      (state, action: PayloadAction<number>) => {
        state.requesting = false;
        state.error = null;
        const id = action.payload;
        const index = state.items.findIndex((item) => item.id === id);
        state.items.splice(index, 1);
      }
    );
    builder.addCase(deleteWhitelistItemAction.pending, (state) => {
      state.requesting = true;
    });
    builder.addCase(deleteWhitelistItemAction.rejected, (state, action) => {
      state.requesting = false;
      state.error = action.payload;
    });
  }
});

export const whitelistReducer = whitelistSlice.reducer;
