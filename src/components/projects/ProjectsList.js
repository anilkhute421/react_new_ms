import { Box, IconButton, Typography } from '@mui/material';
import { labelStyle } from './style';
import colors from '../../theme/colors';
import {
  // CupIcon,
  CylenderIcon,
  FileAction,
  FlagIcon,
  LogisticGraph,
  UserGroup
} from '../../theme/SvgIcons';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import CustomTable from '../form/CustomTable';

const ActionIcons = ({ children, bg, path, payload }) => {
  const navigate = useNavigate();

  return (
    <IconButton
      onClick={() => navigate(path, { state: { listingid: '', project_id: payload?.id } })}
      sx={{
        width: '30px',
        height: '30px',
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

const ProjectList = (props) => {
  const { project_list, searchText } = props || {};

  const result = project_list?.map((project) => {
    // const employee = project?.employee[projectInchargeIndex];
    const projectInchargeName =
      project?.employee.length > 0 && project?.employee
        ? project?.employee[0]?.first_name + '' + project?.employee[0]?.last_name
        : '-';

    return {
      ...project,
      project_incharge: projectInchargeName
    };
  });

  // console.log(result, 'result');

  // const data = [{}]
  // console.log(result, 'project_list');
  // const getprojetcsRows = () => {
  //   if (Array.isArray(project_list)) {
  //     if (project_list.length > 0) {
  //       return project_list
  //         ?.filter((_item) => _item?.name?.toLowerCase().includes(searchText.toLowerCase()))()
  //         .map((el) => {
  //           return {
  //             name: (
  //               <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), textAlign: 'center' }}>
  //                 {el.name}
  //               </Typography>
  //             ),
  //             client_name: (
  //               <Typography
  //                 sx={{ ...labelStyle(colors.grayLight, '12px', 300), textAlign: 'center' }}>
  //                 {el?.project_incharge && el?.project_incharge != 'undefined undefined'
  //                   ? el?.project_incharge
  //                   : '-'}
  //               </Typography>
  //             ),
  //             start_date: (
  //               <Typography
  //                 sx={{ ...labelStyle(colors.grayLight, '12px', 300), textAlign: 'center' }}>
  //                 {el?.start_date?.slice(0, 10) || '-'}
  //               </Typography>
  //             ),
  //             end_date: (
  //               <Typography
  //                 sx={{ ...labelStyle(colors.grayLight, '12px', 300), textAlign: 'center' }}>
  //                 {el?.end_date?.slice(0, 10) || '-'}
  //               </Typography>
  //             ),
  //             status: (
  //               <>
  //                 {el?.status === 'Active' ? (
  //                   <Box
  //                     sx={{
  //                       alignItems: 'center',
  //                       display: 'flex',
  //                       justifyContent: 'center'
  //                     }}>
  //                     <Box
  //                       sx={{
  //                         width: '14px',
  //                         height: '14px',
  //                         borderRadius: '50%',
  //                         background: colors.green82
  //                       }}
  //                     />
  //                   </Box>
  //                 ) : (
  //                   <Box
  //                     sx={{
  //                       alignItems: 'center',
  //                       display: 'flex',
  //                       justifyContent: 'center'
  //                     }}>
  //                     <Box
  //                       sx={{
  //                         width: '14px',
  //                         height: '14px',
  //                         borderRadius: '50%',
  //                         background: colors.red
  //                       }}
  //                     />
  //                   </Box>
  //                 )}
  //               </>
  //             ),
  //             actions: (
  //               <Box
  //                 sx={{
  //                   alignItems: 'center',
  //                   display: 'flex',
  //                   justifyContent: 'center'
  //                 }}>
  //                 <ActionIcons bg={colors.lightRed} path="/view-project" payload={el}>
  //                   <FileAction />
  //                 </ActionIcons>

  //                 <ActionIcons bg={colors.info} path="/create-milestone" payload={el}>
  //                   <FlagIcon />
  //                 </ActionIcons>
  //                 <ActionIcons payload={el} bg={colors.darkBlue} path="/add-document">
  //                   <CylenderIcon />
  //                 </ActionIcons>
  //                 <ActionIcons bg={colors.lightPink} path="/add-team" payload={el}>
  //                   <UserGroup />
  //                 </ActionIcons>
  //                 {/* <ActionIcons payload={el} bg={colors.parrotGreen}>
  //                 <CupIcon />
  //               </ActionIcons> */}

  //                 <ActionIcons payload={el} bg={colors.darkblackblue}>
  //                   <LogisticGraph />
  //                 </ActionIcons>
  //               </Box>
  //             )
  //           };
  //         });
  //     } else {
  //       return [];
  //     }
  //   }
  // };

  const getprojetcsRows = () => {
    if (Array.isArray(result)) {
      if (result.length > 0) {
        return result
          .filter(
            (_item) =>
              _item?.name?.toLowerCase().includes(searchText.toLowerCase()) ||
              _item?.project_incharge?.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((el) => {
            return {
              name: (
                <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), textAlign: 'center' }}>
                  {el.name}
                </Typography>
              ),
              client_name: (
                <Typography
                  sx={{ ...labelStyle(colors.grayLight, '12px', 300), textAlign: 'center' }}>
                  {el?.project_incharge}
                </Typography>
              ),
              start_date: (
                <Typography
                  sx={{ ...labelStyle(colors.grayLight, '12px', 300), textAlign: 'center' }}>
                  {el?.start_date?.slice(0, 10) || '-'}
                </Typography>
              ),
              end_date: (
                <Typography
                  sx={{ ...labelStyle(colors.grayLight, '12px', 300), textAlign: 'center' }}>
                  {el?.end_date?.slice(0, 10) || '-'}
                </Typography>
              ),
              status: (
                <>
                  {el?.status === 'Active' ? (
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
                          background: colors.green82
                        }}
                      />
                    </Box>
                  ) : (
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
                          background: colors.red
                        }}
                      />
                    </Box>
                  )}
                </>
              ),
              actions: (
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                  <ActionIcons bg={colors.lightRed} path="/view-project" payload={el}>
                    <FileAction />
                  </ActionIcons>

                  <ActionIcons bg={colors.info} path="/create-milestone" payload={el}>
                    <FlagIcon />
                  </ActionIcons>
                  <ActionIcons payload={el} bg={colors.darkBlue} path="/add-document">
                    <CylenderIcon />
                  </ActionIcons>
                  <ActionIcons bg={colors.lightPink} path="/add-team" payload={el}>
                    <UserGroup />
                  </ActionIcons>
                  {/* <ActionIcons payload={el} bg={colors.parrotGreen}>
                  <CupIcon />
                </ActionIcons> */}

                  <ActionIcons payload={el} bg={colors.darkblackblue}>
                    <LogisticGraph />
                  </ActionIcons>
                </Box>
              )
            };
          });
      } else {
        return [];
      }
    } else {
      return [];
    }
  };

  const headCells = [
    {
      id: 'name',
      isBorder: true,
      label: (
        <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), textAlign: 'center' }}>
          Projects(All)
        </Typography>
      )
    },
    {
      id: 'client_name',
      isBorder: true,
      textAlign: 'center',
      label: (
        <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), textAlign: 'center' }}>
          Project Incharge
        </Typography>
      )
    },
    {
      id: 'start_date',
      isBorder: true,
      textAlign: 'center',
      label: (
        <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), textAlign: 'center' }}>
          Start Date
        </Typography>
      )
    },
    {
      id: 'end_date',
      isBorder: true,
      label: (
        <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), textAlign: 'center' }}>
          End Date
        </Typography>
      )
    },
    {
      id: 'status',
      isBorder: true,
      textAlign: 'center',
      label: (
        <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), textAlign: 'center' }}>
          Status
        </Typography>
      )
    },
    {
      id: 'actions',
      isBorder: true,

      textAlign: 'center',
      label: (
        <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), textAlign: 'center' }}>
          Actions
        </Typography>
      )
    }
  ];
  return (
    <>
      {project_list.length > 0 && (
        <CustomTable rows={getprojetcsRows(project_list)} isTableBorder headCells={headCells} />
      )}
    </>
  );
};
export default ProjectList;
ActionIcons.propTypes = {
  children: PropTypes.func,
  bg: PropTypes.string,
  path: PropTypes.string,
  payload: PropTypes.object
};
