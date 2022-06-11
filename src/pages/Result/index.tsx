import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useStyles } from 'hooks/useStyles';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useAppSelector } from 'hooks/useAppSelector';
import { Navigate } from 'react-router-dom';
import styles from './styles';

export const Result: React.FC = () => {
  const css = useStyles(styles, 'Result');
  const { data } = useAppSelector((state) => state.news);

  if (!data) {
    return <Navigate to="/" />;
  }

  return (
    <Container css={css.root} maxWidth="sm">
      <Typography css={css.title} variant="h5">Результаты проверки</Typography>
      {data && (
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell css={css.key}>Параметр</TableCell>
                <TableCell css={css.key} align="center">Значение</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(data).map(([key, value]) => {
                let result = value;
                if (typeof value === 'boolean') {
                  result = value
                    ? <CheckIcon color="primary" />
                    : <CancelIcon color="secondary" />;
                }
                return (
                  <TableRow
                    key={key}
                    css={css.row}
                  >
                    <TableCell component="th" scope="row">
                      {key}
                    </TableCell>

                    <TableCell align="center">{result}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};
