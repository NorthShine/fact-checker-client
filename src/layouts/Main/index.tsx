import { Navbar } from 'components/common/Navbar';
import { useStyles } from 'hooks/useStyles';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './styles';

export const Main: React.FC = () => {
  const css = useStyles(styles, 'Main');
  return (
    <div css={css.root}>
      <Navbar />
      <Outlet />
    </div>
  );
};
