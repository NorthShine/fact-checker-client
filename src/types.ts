import { CSSObject } from '@emotion/react';
import { Theme } from '@mui/material/styles';

export interface ApiError {
  message: string;
  status: number;
}

// Re-declare the emotion theme to have the properties of the MaterialUiTheme
declare module '@emotion/react' {
  export interface CustomTheme extends Theme { }
}

export type ThemeCallback = (theme: Theme) => CSSObject;

export type Style = ThemeCallback | CSSObject;

export interface Styles {
  [key: string]: Style;
}
