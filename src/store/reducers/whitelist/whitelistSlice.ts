import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addToWhitelistAction, deleteWhitelistItemAction, getWhitelistItemsAction, updateWhitelistItemAction } from './actionCreators';
import { ApiError, WhitelistItem } from '../../../types';

interface WhitelistState {
  items: WhitelistItem[];
  requesting: boolean;
  error: ApiError | null | undefined;
  filtered: number[]
  script?: string | undefined
}

const initialState: WhitelistState = {
  items: [],
  requesting: true,
  error: null,
  filtered: [],
  script: undefined
};

export const filterWhitelistItemsAction = createAction<string>('whitelist/filterWhitelistItems');
export const enableWhitelistItemEditingAction = createAction<number>('whitelist/enableWhitelistItemEditing');
export const disableWhitelistItemEditingAction = createAction<number>('whitelist/disableWhitelistItemEditing');

export const whitelistSlice = createSlice({
  name: 'whitelist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(enableWhitelistItemEditingAction, (state, action) => {
      const id = action.payload;
      state.items = state.items.map((item) => {
        if (item.id === id) {
          return {
            ...item, editing: true
          };
        }
        return item;
      });
    });

    builder.addCase(disableWhitelistItemEditingAction, (state, action) => {
      const id = action.payload;
      state.items = state.items.map((item) => {
        if (item.id === id) {
          return {
            ...item, editing: false
          };
        }
        return item;
      });
    });

    builder.addCase(filterWhitelistItemsAction, (state, action) => {
      const value = action.payload.toLowerCase();
      state.filtered = state.items.reduce((acc: number[], item) => {
        const url = item.url.toLowerCase();
        if (url.includes(value)) {
          acc.push(item.id);
        }
        return acc;
      }, []);
    });

    builder.addCase(
      getWhitelistItemsAction.fulfilled,
      (state, action: PayloadAction<WhitelistItem[]>) => {
        state.requesting = false;
        state.error = null;
        state.items = action.payload.map((item) => ({
          ...item,
          editing: false
        }));
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
        state.items.push({
          ...action.payload,
          editing: false
        });
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

    builder.addCase(
      updateWhitelistItemAction.fulfilled,
      (state, action: PayloadAction<WhitelistItem>) => {
        const { id, url } = action.payload;
        state.items = state.items.map((item) => {
          if (item.id === id) {
            return { ...item, url, editing: false };
          }
          return item;
        });
      }
    );
    builder.addCase(updateWhitelistItemAction.pending, (state) => {
      state.requesting = true;
    });
    builder.addCase(updateWhitelistItemAction.rejected, (state, action) => {
      state.requesting = false;
      state.error = action.payload;
    });
  }
});

export const whitelistReducer = whitelistSlice.reducer;
