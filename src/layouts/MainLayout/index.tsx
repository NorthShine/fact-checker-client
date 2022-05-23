import { useStyles } from 'hooks/useStyles';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const MainLayout: React.FC = () => {
  const css = useStyles(styles);
  return <div css={css.root}><Outlet /></div>;
};
