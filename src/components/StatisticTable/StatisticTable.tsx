import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function StatisticTable(stats: any) {

  function createData(
    name: string,
    right: number,
    wrong: number,
  ) {
    return { name, right, wrong };
  }

  const rows = [
    createData('Sprint', stats.right ? stats.right : 0, stats.wrong ? stats.wrong : 0),
    createData('Audio', stats.right ? stats.right : 0, stats.wrong ? stats.wrong : 0),
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Game</TableCell>
            <TableCell align="right">Right</TableCell>
            <TableCell align="right">Wrong</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.right}</TableCell>
              <TableCell align="right">{row.wrong}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
