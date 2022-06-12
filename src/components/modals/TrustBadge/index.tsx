import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import { ScriptField } from 'components/common/ScriptField';
import { useAppSelector } from 'hooks/useAppSelector';
import React from 'react';

export const TrustBadgeModal: React.FC = () => {
  const { script } = useAppSelector((state) => state.trustbadge);

  return (
    <Container>
      <Typography>Скопируйте код, чтобы Trust Badge отобразился на вашем сайте:</Typography>
      <ScriptField script={script} />
    </Container>
  );
};
