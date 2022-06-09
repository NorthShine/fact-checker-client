import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAuthAction } from './actionCreators';
import { ApiError, AuthRequestStatus, AuthResponse } from '../../../types';

interface AuthState {
  token: string | undefined;
  status: AuthRequestStatus;
  error: ApiError | null | undefined;
}

const initialState: AuthState = {
  token: undefined,
  status: 'idle',
  error: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setNews: (state, action) => {
      const { token } = action.payload;
      state.token = token;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAuthAction.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
      state.status = 'ready';
      state.error = null;
      const { token } = action.payload;
      state.token = token;
    });
    builder.addCase(getAuthAction.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getAuthAction.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.payload;
    });
  }
});

export const authReducer = authSlice.reducer;
