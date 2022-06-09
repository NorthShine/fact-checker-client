import { CSSObject } from '@emotion/react';
import { Theme } from '@mui/material/styles';

// styles

declare module '@emotion/react' {
  export interface CustomTheme extends Theme { }
}

export type ThemeCallback = (theme: Theme) => CSSObject;

export type Style = ThemeCallback | CSSObject;

export interface Styles {
  [key: string]: Style;
}

// api

export interface ApiError {
  message: string | undefined;
  status: number | undefined;
}

export interface WhitelistItem {
  id: number;
  url: string;
}

export interface PatchWhitelistItemData {
  new_url: string;
}

export interface PatchWhitelistItemRequest {
  id: number,
  data: PatchWhitelistItemData
}

export interface UrlRequest {
  url: string;
}

export interface TextRequest {
  url: string;
}

export interface AuthRequest {
  login: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
}

export interface ApiResponse {
  message: string;
  status: number;
}
