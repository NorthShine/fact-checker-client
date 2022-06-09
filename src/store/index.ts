import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReducer } from './reducers/auth/authSlice';
import { newsReducer } from './reducers/news/newsSlice';

const rootReducer = combineReducers({
  news: newsReducer,
  auth: authReducer
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
