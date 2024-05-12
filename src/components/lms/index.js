import { Box, Typography } from '@mui/material';
import DataNotFound from '../../utils/NotFound';
import CustomTable from '../form/CustomTable';
import { ContainerStyle, labelStyle } from '../employee/style';
import { getprojetcsRows, headCells } from '../lms/lmsListing';
import CustomDrawer from '../form/CustomDrawer';
import { useState } from 'react';
import { add_new, employee_not_found, lms_index_heading } from '../lms/lmsText';
import CreateEmployee from '../employee/CreateEmployee';

function Lms() {
  const [open, setOpen] = useState(false);

  return (
    <ContainerStyle>
      <Typography sx={{ ...labelStyle('#242424', '22px', 700), margin: '10px 0px 20px 0px' }}>
        {lms_index_heading}
      </Typography>
      <Box>
        <DataNotFound label={add_new} path={() => setOpen(true)} text={employee_not_found} />
        <CustomTable rows={getprojetcsRows()} headCells={headCells} />
      </Box>
      {open && (
        <CustomDrawer open={open} setOpen={() => setOpen(false)}>
          <CreateEmployee open={() => setOpen(false)} />
        </CustomDrawer>
      )}
    </ContainerStyle>
  );
}
export default Lms;
