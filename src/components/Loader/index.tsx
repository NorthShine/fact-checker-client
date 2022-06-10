import CircularProgress from '@mui/material/CircularProgress';
import { useStyles } from 'hooks/useStyles';
import React from 'react';
import styles from './styles';

export const Loader: React.FC = () => {
  const css = useStyles(styles, 'Loader');
  return (
    <div css={css.root}>
      <CircularProgress css={css.loader} />
    </div>
  );
};
