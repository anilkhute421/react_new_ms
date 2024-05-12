import { Box, IconButton, Typography } from '@mui/material';
// import { labelStyle } from './style';
import colors from '../../theme/colors';

import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { labelStyle } from './style';
import { EmployeeInfoIcon } from '../../theme/SvgIcons';
import {
  emp_Action,
  emp_department,
  emp_designation,
  emp_id,
  emp_name,
  emp_no_of_proj,
  emp_status
} from './empText';
import CustomTable from '../form/CustomTable';

const ActionIcons = ({ children, bg, path, payload }) => {
  const navigate = useNavigate();
  return (
    <IconButton
      onClick={() => navigate(path, { state: { listingid: '', project_id: payload?.id } })}
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

// const datarow = [...Array(20).keys()].map((i) => {
//   return {
//     id: i,
//     projects: 'Awali' + i,
//     projectIncharge: 'Name #' + (i + 1),
//     startDate: `${i} Mar, 20201`,
//     endDate: `${i} Apr, 20202`,
//     status: (
//       <Box
//         sx={{
//           alignItems: 'center',
//           display: 'flex',
//           justifyContent: 'center'
//         }}>
//         <Box
//           sx={{
//             width: '14px',
//             height: '14px',
//             borderRadius: '50%',
//             background: `#${Math.floor(Math.random() * 16777215).toString(16)}`
//           }}
//         />
//       </Box>
//     ),
//     actions: (
//       <Box
//         sx={{
//           alignItems: 'center',
//           display: 'flex',
//           justifyContent: 'center'
//         }}>
//         <ActionIcons bg={colors.lightRed} path="/view-employee">
//           <EmployeeInfoIcon />
//         </ActionIcons>
//       </Box>
//     )
//   };
// });

const EmployeeList = (props) => {
  const { employee_list } = props || {};
  const getprojetcsRows = () => {
    if (Array.isArray(employee_list)) {
      if (employee_list.length > 0) {
        return (employee_list || []).map((el) => {
          return {
            employeeId: (
              <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), textAlign: 'center' }}>
                {el.id}
              </Typography>
            ),
            employeeName: (
              <Typography
                sx={{ ...labelStyle(colors.grayLight, '12px', 300), textAlign: 'center' }}>
                {`${el?.first_name} ${el?.last_name} `}
              </Typography>
            ),
            designation: (
              <Typography
                sx={{ ...labelStyle(colors.grayLight, '12px', 300), textAlign: 'center' }}>
                {/* {el?.project_start_date?.slice(0, 10) || '-'} */}
                {el?.employee_job[0]?.designation ? el?.employee_job[0]?.designation : '-'}
              </Typography>
            ),
            department: (
              <Typography
                sx={{ ...labelStyle(colors.grayLight, '12px', 300), textAlign: 'center' }}>
                {el?.employee_job[0]?.department ? el?.employee_job[0]?.department : '-'}
              </Typography>
            ),
            status: (
              <Typography
                sx={{ ...labelStyle(colors.grayLight, '12px', 300), textAlign: 'center' }}>
                {el?.status}
              </Typography>
            ),
            noOfProjects: (
              <Typography
                sx={{ ...labelStyle(colors.grayLight, '12px', 300), textAlign: 'center' }}>
                {el?.projectcount}
              </Typography>
            ),
            actions: (
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                <ActionIcons bg={colors.lightRed} path="/view-employee" payload={el}>
                  <EmployeeInfoIcon />
                </ActionIcons>
              </Box>
            )
          };
        });
      } else {
        return [];
      }
    }
  };

  // export const getprojetcsRows = () => {
  //   if (Array.isArray(datarow)) {
  //     if (datarow.length > 0) {
  //       return datarow.map((el) => {
  //         return {
  //           projects: (
  //             <Typography sx={{ ...labelStyle(colors.nero, '14px', 500) }}>{el.projects}</Typography>
  //           ),
  //           projectIncharge: (
  //             <Typography sx={{ ...labelStyle(colors.grayLight, '12px', 300), textAlign: 'center' }}>
  //               {el.projectIncharge}
  //             </Typography>
  //           ),
  //           startDate: (
  //             <Typography sx={{ ...labelStyle(colors.grayLight, '12px', 300), textAlign: 'center' }}>
  //               {el.startDate}
  //             </Typography>
  //           ),
  //           endDate: (
  //             <Typography sx={{ ...labelStyle(colors.grayLight, '12px', 300), textAlign: 'center' }}>
  //               {el.endDate}
  //             </Typography>
  //           ),
  //           status: el.status,
  //           actions: el.actions
  //         };
  //       });
  //     } else {
  //       return [];
  //     }
  //   }
  // };

  const headCells = [
    {
      id: 'employeeId',
      // label: 'Employee ID'
      isBorder: true,

      label: <Typography sx={{ ...labelStyle(colors.nero, '14px', 500) }}>{emp_id}</Typography>
    },
    {
      id: 'employeeName',
      isBorder: true,

      textAlign: 'center',
      label: (
        <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), textAlign: 'center' }}>
          {emp_name}
        </Typography>
      )
    },
    {
      id: 'designation',
      isBorder: true,

      textAlign: 'center',
      label: (
        <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), textAlign: 'center' }}>
          {emp_designation}
        </Typography>
      )
    },
    {
      id: 'department',
      isBorder: true,

      label: (
        <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), textAlign: 'center' }}>
          {emp_department}
        </Typography>
      )
    },
    {
      id: 'status',
      isBorder: true,

      label: (
        <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), textAlign: 'center' }}>
          {emp_status}
        </Typography>
      )
    },
    {
      id: 'noOfProjects',
      isBorder: true,

      textAlign: 'center',
      label: (
        <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), textAlign: 'center' }}>
          {emp_no_of_proj}
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
  return (
    <>
      {employee_list.length > 0 && (
        <CustomTable rows={getprojetcsRows(employee_list)} isTableBorder headCells={headCells} />
      )}
    </>
  );
};
export default EmployeeList;

ActionIcons.propTypes = {
  children: PropTypes.func,
  bg: PropTypes.string,
  path: PropTypes.string,
  payload: PropTypes.object
};
