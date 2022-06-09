import axios from 'axios';
import {
  ApiResponse,
  AuthRequest,
  AuthResponse,
  PatchWhitelistItemRequest,
  TextRequest,
  UrlRequest,
  WhitelistItem
} from 'types';

const Api = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL,
  withCredentials: true
});

// auth

const signin = (data: AuthRequest) => Api.post<AuthResponse | ApiResponse>('/api/admin/sign_in/', data);

// whitelist

const getWhitelist = () => Api.get<WhitelistItem[] | ApiResponse>('/api/admin/whitelist/');

const getWhitelistItem = (id: number) => Api.get<WhitelistItem | ApiResponse>(`/api/admin/whitelist/${id}`);

const patchWhitelistItem = ({ id, data }: PatchWhitelistItemRequest) => Api.post<WhitelistItem | ApiResponse>(`/api/admin/whitelist/${id}`, data);

const deleteWhitelistItem = (id: number) => Api.delete(`/api/admin/whitelist/${id}`);

const addToWhitelist = (data: UrlRequest) => Api.post('/api/admin/whitelist/', data);

// news fetching

const fetchDataByURL = (data: UrlRequest) => Api.post('/api/parser/url/', data);

const fetchDataByText = (data: TextRequest) => Api.post('/api/parser/text/', data);

export default {
  fetchDataByURL,
  fetchDataByText,
  signin,
  getWhitelist,
  addToWhitelist,
  getWhitelistItem,
  patchWhitelistItem,
  deleteWhitelistItem
};
