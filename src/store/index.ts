import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { injectApiInterceptors } from '../api';
import { alertReducer } from './reducers/alert/alertReducer';
import { authReducer } from './reducers/auth/authSlice';
import { loaderReducer } from './reducers/loader/loaderReducer';
import { newsReducer } from './reducers/news/newsSlice';
import { whitelistReducer } from './reducers/whitelist/whitelistSlice';

const rootReducer = combineReducers({
  news: newsReducer,
  auth: authReducer,
  whitelist: whitelistReducer,
  alert: alertReducer,
  loader: loaderReducer
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export const store = setupStore();

injectApiInterceptors(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
