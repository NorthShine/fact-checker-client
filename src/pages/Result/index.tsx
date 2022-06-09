import { Container } from '@mui/system';
import { useStyles } from 'hooks/useStyles';
import React from 'react';
import styles from './styles';

export const Result: React.FC = () => {
  const css = useStyles(styles, 'Result');

  return (
    <Container css={css.root} maxWidth="sm" />
  );
};
