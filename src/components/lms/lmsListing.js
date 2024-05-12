import { Box, IconButton, Typography } from '@mui/material';
// import { labelStyle } from './style';
import colors from '../../theme/colors';

// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
// import { labelStyle } from '../';
import { EmployeeInfoIcon } from '../../theme/SvgIcons';
import {
  emp_Action,
  //   emp_Action,
  //   emp_department,
  emp_designation,
  emp_end_date,
  emp_id,
  emp_leave_type,
  emp_name,
  emp_no_of_leave,
  //   emp_no_of_proj,
  emp_start_date,
  //   emp_status,
  quoat,
  status
} from '../lms/lmsText';
import { labelStyle } from '../employee/style';

const ActionIcons = ({ children, bg, path }) => {
  const navigate = useNavigate();
  return (
    <IconButton
      onClick={() => navigate(path)}
      sx={{
        w: '30px',
        h: '30px',
        ml: '5px',
        mr: '5px',
        background: bg,
        '&:hover': {
          backgroundColor: bg
        }
      }}>
      {children}
    </IconButton>
  );
};

const datarow = [...Array(20).keys()].map((i) => {
  return {
    id: i,
    projects: 'Awali' + i,
    projectIncharge: 'Name #' + (i + 1),
    startDate: `${i} Mar, 20201`,
    endDate: `${i} Apr, 20202`,
    status: (
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}>
        <Box
          sx={{
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            background: `#${Math.floor(Math.random() * 16777215).toString(16)}`
          }}
        />
      </Box>
    ),
    actions: (
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}>
        <ActionIcons bg={colors.lightRed} path="/view-employee">
          <EmployeeInfoIcon />
        </ActionIcons>
      </Box>
    )
  };
});

export const getprojetcsRows = () => {
  if (Array.isArray(datarow)) {
    if (datarow.length > 0) {
      return datarow.map((el) => {
        return {
          projects: (
            <Typography sx={{ ...labelStyle(colors.nero, '14px', 500) }}>{el.projects}</Typography>
          ),
          projectIncharge: (
            <Typography sx={{ ...labelStyle(colors.grayLight, '12px', 300), textAlign: 'center' }}>
              {el.projectIncharge}
            </Typography>
          ),
          startDate: (
            <Typography sx={{ ...labelStyle(colors.grayLight, '12px', 300), textAlign: 'center' }}>
              {el.startDate}
            </Typography>
          ),
          endDate: (
            <Typography sx={{ ...labelStyle(colors.grayLight, '12px', 300), textAlign: 'center' }}>
              {el.endDate}
            </Typography>
          ),
          status: el.status,
          actions: el.actions
        };
      });
    } else {
      return [];
    }
  }
};

export const headCells = [
  {
    id: 'projects',
    isBorder: true,
    // label: 'Employee ID'
    label: <Typography sx={{ ...labelStyle(colors.nero, '14px', 500) }}>{emp_name}</Typography>
  },
  {
    id: 'projectIncharge',
    isBorder: true,

    textAlign: 'center',
    label: (
      <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), textAlign: 'center' }}>
        {emp_id}
      </Typography>
    )
  },
  {
    id: 'startDate',
    isBorder: true,

    textAlign: 'center',
    label: (
      <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), textAlign: 'center' }}>
        {emp_designation}
      </Typography>
    )
  },
  {
    id: 'endDate',
    isBorder: true,

    label: (
      <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), textAlign: 'center' }}>
        {emp_leave_type}
      </Typography>
    )
  },
  {
    id: 'endDate',
    isBorder: true,

    label: (
      <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), textAlign: 'center' }}>
        {emp_start_date}
      </Typography>
    )
  },
  {
    id: 'status',
    isBorder: true,

    textAlign: 'center',
    label: (
      <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), textAlign: 'center' }}>
        {emp_end_date}
      </Typography>
    )
  },
  {
    id: 'status',
    isBorder: true,

    textAlign: 'center',
    label: (
      <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), textAlign: 'center' }}>
        {emp_no_of_leave}
      </Typography>
    )
  },
  {
    id: 'status',
    isBorder: true,

    textAlign: 'center',
    label: (
      <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), textAlign: 'center' }}>
        {quoat}
      </Typography>
    )
  },
  {
    id: 'actions',
    isBorder: true,

    textAlign: 'center',
    label: (
      <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), textAlign: 'center' }}>
        {status}
      </Typography>
    )
  },
  {
    id: 'actions',
    isBorder: true,

    textAlign: 'center',
    label: (
      <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), textAlign: 'center' }}>
        {emp_Action}
      </Typography>
    )
  }
];

ActionIcons.propTypes = {
  children: PropTypes.func,
  bg: PropTypes.string,
  path: PropTypes.string
};
