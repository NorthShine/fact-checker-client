import { css, SerializedStyles } from '@emotion/react';
import type { Styles } from 'types';
import { theme } from '../theme';

interface CSSStyles {
  [key: string]: SerializedStyles
}

export const useStyles = (styles: Styles) => Object.entries(styles)
  .reduce((acc: CSSStyles, [key, value]) => {
    const style = typeof value === 'function'
      ? value(theme)
      : value;
    acc[key] = css(style);
    return acc;
  }, {});
