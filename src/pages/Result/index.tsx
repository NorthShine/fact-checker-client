import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useStyles } from "hooks/useStyles";

import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./styles";
let rows = [
  {
    is_trusted_url: true,
    is_real_author: true,
    article_url: null,
    author: null,
    title: null,
    text: null,
  },
];

export const Result: React.FC = () => {
  const css = useStyles(styles, "Result");

  return (
    <Container css={css.root} maxWidth="sm">
      <Container css={css.header}>
        <Typography css={css.headlineResult}>Результаты поиска:</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Параметр</TableCell>
                <TableCell align="right">Значение</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {"is_trusted_url:"}
                  </TableCell>

                  <TableCell align="right">{"true"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {"is_real_author:"}
                  </TableCell>

                  <TableCell align="right">{"true"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {"article_url:"}
                  </TableCell>

                  <TableCell align="right">{"string"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {" author:"}
                  </TableCell>

                  <TableCell align="right">{"string"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {" title:"}
                  </TableCell>

                  <TableCell align="right">{"string"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {"text:"}
                  </TableCell>

                  <TableCell align="right">{"string"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Container>
  );
};
