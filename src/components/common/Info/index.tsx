import { Alert, Paper, Typography } from '@mui/material';
import { useAppSelector } from 'hooks/useAppSelector';
import { useStyles } from 'hooks/useStyles';
import React, { Suspense } from 'react';
import styles from './styles';

export const Info: React.FC = () => {
  const css = useStyles(styles, 'Info');
  const { data } = useAppSelector((state) => state.news);

  return (
    <Suspense fallback={null}>
      <Paper css={css.root} elevation={1}>
        <Typography align="left" variant="subtitle1" css={css.title}>{data?.title}</Typography>
        {data?.url
          && (
            <a target="_blank" css={css.link} href={data.url} rel="noreferrer">
              <Typography
                align="left"
                css={css.url}
              >
                {data.url}
              </Typography>
            </a>
          )}
        <Typography align="left" css={css.text}>{data?.text}</Typography>
        {(typeof data?.is_article === 'boolean' && !data.is_article) && (
          <Alert css={css.alert} severity="error">
            Источник не является статьей!
          </Alert>
        )}
      </Paper>
    </Suspense>
  );
};
