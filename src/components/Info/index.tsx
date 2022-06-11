import { Paper, Typography } from '@mui/material';
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
            <a css={css.link} href={data.url}>
              <Typography
                align="left"
                css={css.url}
              >
                {data.url}
              </Typography>
            </a>
          )}
        <Typography align="left" css={css.text}>{data?.text}</Typography>
      </Paper>
    </Suspense>
  );
};
