import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiResponse, PatchWhitelistItemRequest, UrlRequest, WhitelistItem } from 'types';
import api from '../../../api';

export const getWhitelistItemsAction = createAsyncThunk<
  WhitelistItem[], void, { rejectValue: ApiResponse }>(
    'whitelist/getWhitelistItems',
    async (_, { rejectWithValue }) => {
      try {
        const response = await api.getWhitelistItems();
        return response.data as WhitelistItem[];
      } catch (error) {
        const err = (error as ApiResponse);
        return rejectWithValue({
          status: err.status,
          message: err.message
        });
      }
    }
  );

export const addToWhitelistAction = createAsyncThunk<
  WhitelistItem, UrlRequest, { rejectValue: ApiResponse }>(
    'auth/addToWhitelist',
    async (data, { rejectWithValue }) => {
      try {
        const response = await api.addToWhitelist(data);
        return response.data as WhitelistItem;
      } catch (error) {
        const err = (error as ApiResponse);
        return rejectWithValue({
          status: err.status,
          message: err.message
        });
      }
    }
  );

export const deleteWhitelistItemAction = createAsyncThunk<
  number, number, { rejectValue: ApiResponse }>(
    'whitelist/deleteWhitelistItem',
    async (id, { rejectWithValue }) => {
      try {
        await api.deleteWhitelistItem(id);
        return id;
      } catch (error) {
        const err = (error as ApiResponse);
        return rejectWithValue({
          status: err.status,
          message: err.message
        });
      }
    }
  );

export const updateWhitelistItemAction = createAsyncThunk<
  WhitelistItem, PatchWhitelistItemRequest, { rejectValue: ApiResponse }>(
    'whitelist/updateWhitelistItem',
    async (data, { rejectWithValue }) => {
      try {
        const response = await api.patchWhitelistItem(data);
        return response.data as WhitelistItem;
      } catch (error) {
        const err = (error as ApiResponse);
        return rejectWithValue({
          status: err.status,
          message: err.message
        });
      }
    }
  );
