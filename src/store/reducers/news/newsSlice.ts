import {
  createSlice
  // PayloadAction
} from '@reduxjs/toolkit';
// import { getNewsAction } from './actionCreators';
import { ApiError } from '../../../types';

interface UserState {
  data: null | any;
  isLoading: boolean;
  error: ApiError | null | undefined;
}

const initialState: UserState = {
  data: null,
  isLoading: false,
  error: null
};

export const newsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // setNews: (state, action) => {
    //   state.data = action.payload;
    // }
  }
  // extraReducers: (builder) => {
  //   builder.addCase(getUserAction.fulfilled, (state, action: PayloadAction<null>) => {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.data = action.payload;
  //   });
  //   builder.addCase(getUserAction.pending, (state) => {
  //     state.isLoading = true;
  //   });
  //   builder.addCase(getUserAction.rejected, (state, action) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   });
  // }
});

export const newsReducer = newsSlice.reducer;
