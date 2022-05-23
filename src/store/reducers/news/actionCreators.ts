// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { AxiosError } from 'axios';
// import { getUser } from '../../../api';
// import { User, ApiError } from '../../../types';

// export const getNewsAction = createAsyncThunk<User, void, { rejectValue: ApiError }>(
//   'user/getUserAction',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await getUser();
//       return response.data;
//     } catch (err) {
//       const { response } = err as AxiosError;
//       return rejectWithValue({
//         status: response!.status as number,
//         message: response!.data.message as string
//       });
//     }
//   }
// );
