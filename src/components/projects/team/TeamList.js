import { Box, IconButton, Typography } from '@mui/material';

import PropTypes from 'prop-types';
import { labelStyle } from '../style';
import colors from '../../../theme/colors';
import CustomTable from '../../form/CustomTable';
import { DeleteIcon } from '../../../theme/SvgIcons';

const ActionIcons = ({ bg, text }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box
        sx={{
          width: '14px',
          height: '14px',
          background: bg,
          borderRadius: '50%'
        }}
      />{' '}
      <Typography
        sx={{
          ...labelStyle(colors.green82, '14px', 400),
          textAlign: 'center',
          marginLeft: '10px'
        }}>
        {text}
      </Typography>
    </Box>
  );
};

const commonText = (text) => {
  return (
    <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), textAlign: 'center' }}>
      {text}
    </Typography>
  );
};
const commonGrayText = (text) => {
  return (
    <Typography sx={{ ...labelStyle(colors.grayLight, '14px', 400), textAlign: 'center' }}>
      {text}
    </Typography>
  );
};
// eslint-disable-next-line import/no-unused-modules
export const rows = [...Array(20).keys()].map((i) => {
  return {
    id: i,
    employeeID: 'sfs00' + i,
    employeeName: 'Ajeet' + (i + 1),
    role: `Developer`,
    assignDate: `${i}-12-22`,
    department: `Design`,
    assignedMilestone: 'Design',
    status: 'Assigned'
  };
});

const TeamList = (props) => {
  const { team_list, setOpenD } = props || {};
  console.log(team_list, 'team_listwewe');
  const getprojetcsRows = () => {
    if (Array.isArray(team_list)) {
      if (team_list?.length > 0) {
        return team_list?.map((el) => {
          return {
            employeeID: commonText(el?.id),
            employeeName: commonText(el?.first_name + ' ' + el?.last_name),
            role: commonGrayText(el?.project_assignee?.role),
            assignDate: commonGrayText(
              el?.project_milestone_start_date ? el?.project_milestone_start_date.slice(0, 10) : '-'
            ),
            department: commonGrayText(
              el?.job_details?.department ? el?.job_details?.department : '-'
            ),
            assignedMilestone: commonGrayText(
              el?.project_milestone_name ? el?.project_milestone_name : '-'
            ),
            status: <ActionIcons bg={colors.green82} text={el?.project_assignee_status} />,
            actions: (
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                <IconButton
                  sx={{ width: '29px', height: '29px', ml: '10px', background: colors.bgDelete }}
                  onClick={() =>
                    setOpenD({
                      status: true,
                      id: el?.id,
                      type: 'delete',
                      milestone_id: el?.milestone_assignee_id
                    })
                  }>
                  <DeleteIcon />
                </IconButton>
                {/* <ActionIcons
                ml="10px"
                bg={colors.darkBlue}
                path="/req-doc-view"
                payload={el?.id}
                project_id={projetct_id}>
                <DocumentIcon fill={colors.white} />
              </ActionIcons> */}
              </Box>
            )
          };
        });
      } else {
        return [];
      }
    }
  };

  const columns = [
    {
      id: 'employeeID',
      isBorder: true,
      label: commonText('Employee ID')
    },
    {
      id: 'employeeName',
      isBorder: true,
      textAlign: 'center',
      label: commonText('Employee Name')
    },
    {
      id: 'role',
      isBorder: true,

      textAlign: 'center',
      label: commonText('Role')
    },
    {
      id: 'assignDate',
      isBorder: true,

      textAlign: 'center',
      label: commonText('Assign Date')
    },
    {
      id: 'department',
      isBorder: true,

      textAlign: 'center',
      label: commonText('Department')
    },
    {
      id: 'assignedMilestone',
      isBorder: true,

      textAlign: 'center',
      label: commonText('Assigned Milestone')
    },
    {
      id: 'status',
      textAlign: 'center',
      label: commonText('Status')
    },
    {
      id: 'actions',
      isBorder: true,
      textAlign: 'center',
      label: commonText('Action')
    }
  ];
  // const headCells = [
  //   {
  //     id: 'employeeID',
  //     isBorder: true,
  //     label: (
  //       <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), textAlign: 'center' }}>
  //         Projects(All)
  //       </Typography>
  //     )
  //   },
  //   {
  //     id: 'client_name',
  //     isBorder: true,
  //     textAlign: 'center',
  //     label: (
  //       <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), textAlign: 'center' }}>
  //         Project Incharge
  //       </Typography>
  //     )
  //   },
  //   {
  //     id: 'start_date',
  //     isBorder: true,
  //     textAlign: 'center',
  //     label: (
  //       <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), textAlign: 'center' }}>
  //         Start Date
  //       </Typography>
  //     )
  //   },
  //   {
  //     id: 'end_date',
  //     isBorder: true,
  //     label: (
  //       <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), textAlign: 'center' }}>
  //         End Date
  //       </Typography>
  //     )
  //   },
  //   {
  //     id: 'status',
  //     isBorder: true,
  //     textAlign: 'center',
  //     label: (
  //       <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), textAlign: 'center' }}>
  //         Status
  //       </Typography>
  //     )
  //   },
  //   {
  //     id: 'actions',
  //     isBorder: true,

  //     textAlign: 'center',
  //     label: (
  //       <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), textAlign: 'center' }}>
  //         Actions
  //       </Typography>
  //     )
  //   }
  // ];
  return (
    <>
      {team_list && team_list.length > 0 && (
        <CustomTable rows={getprojetcsRows(team_list)} isTableBorder headCells={columns} />
      )}
    </>
  );
};

export default TeamList;

ActionIcons.propTypes = {
  bg: PropTypes.string,
  text: PropTypes.string
};
