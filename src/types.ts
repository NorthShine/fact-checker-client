import { Theme } from '@mui/material/styles';

export interface ApiError {
  message: string;
  status: number;
}

// Re-declare the emotion theme to have the properties of the MaterialUiTheme
declare module '@emotion/react' {
  export interface CustomTheme extends Theme {}
}

export type RawStyles = { [key: string]: string | number }

export type ThemeCallback = (theme: Theme) => RawStyles;

export type Style = ThemeCallback | RawStyles;

export interface Styles {
  [key: string]: Style;
}
