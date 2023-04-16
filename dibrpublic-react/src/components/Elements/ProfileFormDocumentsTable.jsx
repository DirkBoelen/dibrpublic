import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@material-ui/core';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

function createData(document, status) {
  return { document, status};
}

const rows = [
  createData('Paspoort/id', 1),
  createData('Werkgeversverklaring', 0),
  createData('Verhuurdersverklaring', 1),
  createData('Salarisstrook', 1),
];

export default function ProfileFormDocumentsTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Documenten</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Upload</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.document}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.document}
              </TableCell>
              <TableCell align="right">
                {row.status === 1 ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
              </TableCell>
              <TableCell align="right">
                <IconButton aria-label="upload">
                    <UploadFileIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}