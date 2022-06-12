import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import { ScriptField } from 'components/common/ScriptField';
import { useAppSelector } from 'hooks/useAppSelector';
import { useStyles } from 'hooks/useStyles';
import React from 'react';
import TrustBadge from '../../../assets/images/trustbadge.png';
import styles from './styles';

export const TrustBadgeModal: React.FC = () => {
  const { script } = useAppSelector((state) => state.trustbadge);
  const css = useStyles(styles, 'TrustBadgeModal');

  return (
    <Container>
      <Typography>Скопируйте код, чтобы Trust Badge отобразился на вашем сайте:</Typography>
      <Container css={css.trustbadge}>
        <img css={css.image} alt="trsutbadge" src={TrustBadge} />
      </Container>
      <Typography>Скопируйте код, чтобы Trust Badge отобразился на вашем сайте:</Typography>
      <ScriptField script={script} />
    </Container>
  );
};
