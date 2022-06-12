import axios from 'axios';
import {
  ApiResponse,
  AuthRequest,
  AuthResponse,
  NewsResponse,
  PatchWhitelistItemRequest,
  TextRequest,
  TrustBadgeRequest,
  UrlRequest,
  WhitelistItem,
  WhitelistParams,
  WhitelistRequest,
  WhitelistResponse
} from 'types';
import { AppStore } from '../store';

const Api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

// auth

const signin = (data: AuthRequest) => Api.post<AuthResponse | ApiResponse>('/api/admin/sign_in', data);

// whitelist

const createSearchURLParams = (data: WhitelistParams): string => {
  const params = new URLSearchParams();
  Object.entries(data).forEach(([key, value]) => {
    params.append(key, value);
  });
  return params.toString();
};

const getWhitelistItems = (data: WhitelistRequest) => Api.get<WhitelistResponse | ApiResponse>(
  `/api/admin/whitelist${data ? `?${createSearchURLParams(data)}` : ''}`
);

const getWhitelistItem = (id: number) => Api.get<WhitelistItem | ApiResponse>(
  `/api/admin/whitelist/${id}`
);

const patchWhitelistItem = ({ id, data }: PatchWhitelistItemRequest) => Api.patch<
  WhitelistItem | ApiResponse
>(
  `/api/admin/whitelist/${id}`,
  data
);

const deleteWhitelistItem = (id: number) => Api.delete(`/api/admin/whitelist/${id}`);

const addToWhitelist = (data: UrlRequest) => Api.post<WhitelistItem>('/api/admin/whitelist', data);

// trustbadge

const fetchTrustBadgeScript = (data: TrustBadgeRequest) => Api.post<WhitelistItem>('/api/trustbadge/', data);

// news fetching

const checkURL = (data: UrlRequest) => Api.post<NewsResponse>('/api/parser/url', data);

const checkText = (data: TextRequest) => Api.post<NewsResponse>('/api/parser/text', data);

export const injectApiInterceptors = (store: AppStore) => {
  Api.interceptors.request.use(async (req) => {
    const { token } = store.getState().auth;
    if (token && req.headers) {
      req.headers.authorization = `Bearer ${token}`;
    }
    return req;
  });
};

export default {
  checkURL,
  checkText,
  signin,
  getWhitelistItems,
  addToWhitelist,
  getWhitelistItem,
  patchWhitelistItem,
  deleteWhitelistItem,
  fetchTrustBadgeScript
};
