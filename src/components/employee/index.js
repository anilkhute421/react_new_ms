import { Box, Button, FormControl, InputAdornment, Typography } from '@mui/material';
import { SearchIcon } from '../../theme/SvgIcons';
import colors from '../../theme/colors';
import DataNotFound from '../../utils/NotFound';
// import CustomTable from '../form/CustomTable';
import { ContainerStyle, FieldStyle, labelStyle } from './style';
import EmployeeList from './EmployeeList';
import CustomSelect from '../form/CustomSelect';
import { CustomFlexBox } from '../../utils/common_functions';
import CustomDrawer from '../form/CustomDrawer';
import CreateEmployee from './CreateEmployee';
import { useEffect, useState } from 'react';
import { add_new, employee_not_found, filter, index_heading, search_task, sort } from './empText';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeeAction } from '../../redux/employee/action';
import { SpinnerStyle } from '../projects/style';
import { PropagateLoader } from 'react-spinners';

function Projects() {
  const [open, setOpen] = useState(false);

  const options = [
    { value: 'a-z', label: 'A to Z ' },
    { value: 'a-z', label: 'Z to A ' },
    { value: 'a-z', label: 'Newest One ' },
    { value: 'a-z', label: 'Oldest One ' }
  ];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployeeAction());
  }, []);

  const { employee_list } = useSelector((e) => e.employee);
  const { spineer_value } = useSelector((e) => e.project);

  console.log(spineer_value, 'jkhjkhk');

  return (
    <ContainerStyle>
      <Typography sx={{ ...labelStyle('#242424', '22px', 700), margin: '10px 0px 20px 0px' }}>
        {index_heading}
      </Typography>
      <Box>
        <CustomFlexBox sx={{ marginBottom: '30px' }}>
          <div style={{ width: '100%' }}>
            <Typography sx={labelStyle(colors.grayLight, '12px', 400)}>{search_task}</Typography>
            <FieldStyle
              placeholder={search_task}
              sx={{ input: { '&::placeholder': { color: colors.grayLight } } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
            />
          </div>
          <div>
            <FormControl sx={{ ml: '20px' }}>
              <Typography sx={labelStyle(colors.grayLight, '12px', 400)}>{sort}</Typography>
              <CustomSelect width="100px" height="35px" option={options} />
            </FormControl>
          </div>
          <div style={{ display: 'flex' }}>
            <div>
              <FormControl sx={{ ml: '20px' }}>
                <Typography sx={labelStyle(colors.grayLight, '12px', 400)}>{filter}</Typography>
                <CustomSelect width="100px" height="35px" option={options} />
              </FormControl>
            </div>
            <div style={{ marginTop: '22px' }}>
              <FormControl>
                <CustomSelect width="130px" height="35px" option={options} />
              </FormControl>
            </div>
          </div>
          <div style={{ marginLeft: '27px' }}>
            <Button
              onClick={() => setOpen(true)}
              sx={{
                width: '150px',
                background: colors.darkSkyBlue,
                marginTop: '20px',
                color: 'white',
                '&:hover': {
                  backgroundColor: colors.darkSkyBlue
                }
              }}>
              {add_new}
            </Button>
          </div>
        </CustomFlexBox>

        {spineer_value ? (
          <SpinnerStyle>
            <PropagateLoader color="#36d7b7" size="15" />
          </SpinnerStyle>
        ) : employee_list?.length > 0 ? (
          <EmployeeList employee_list={employee_list} />
        ) : (
          <DataNotFound label={add_new} path={() => setOpen(true)} text={employee_not_found} />
        )}
      </Box>
      {open && (
        <CustomDrawer open={open} setOpen={() => setOpen(false)}>
          <CreateEmployee setOpen={() => setOpen(false)} open={open} />
        </CustomDrawer>
      )}
    </ContainerStyle>
  );
}
export default Projects;
