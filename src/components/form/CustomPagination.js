import TablePagination from '@mui/material/TablePagination';

const CustomPagination = () => {
  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={20}
      rowsPerPage={5}
      onPageChange={() => {}}
      onRowsPerPageChange={() => {}}
    />
  );
};

export default CustomPagination;
