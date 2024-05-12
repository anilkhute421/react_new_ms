import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import colors from '../../theme/colors';
import { Box, TablePagination } from '@mui/material';

export default function CustomTable(props) {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = React.useState(0);
  const { isTableBorder, rows, headCells } = props || {};
  // console.log(props, 'props');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%' }}>
        <TableContainer component={Paper}>
          <Table
            sx={{
              minWidth: 750,
              border: isTableBorder ? `1px solid ${colors.Gray90}` : ''
            }}
            aria-labelledby="tableTitle"
            size={'medium'}>
            <TableHead>
              <TableRow sx={{ backgroundColor: colors.creamGray }}>
                {headCells.map((col, ind) => {
                  return <TableCell key={ind}>{col.label}</TableCell>;
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows?.length ? (
                rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow
                        key={index}
                        sx={{
                          cursor: 'pointer',
                          '&:hover': {
                            backgroundColor: colors.skyblueLight
                          }
                        }}>
                        {headCells.map((column, columnIndex) => (
                          <TableCell
                            sx={{ border: column.isBorder ? `1px solid ${colors.Gray90}` : '' }}
                            key={columnIndex}
                            component="th">
                            {row[column.id]}
                          </TableCell>
                        ))}
                      </TableRow>
                    );
                  })
              ) : (
                <Box sx={{ alignItems: 'center', display: 'flex', p: '20px' }}>No Data Found</Box>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
