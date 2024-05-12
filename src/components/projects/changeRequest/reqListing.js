import { Box, IconButton, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
// import { labelStyle } from '../';
import { appr_by_client, craete_date, emp_Action, hours, title } from './reqText';
import { labelStyle } from '../../employee/style';
import colors from '../../../theme/colors';
import { DeleteIcon, DocumentIcon, EditIcon } from '../../../theme/SvgIcons';

const ActionIcons = ({ children, bg, path, ml, payload, project_id }) => {
  console.log(payload, 'path');
  const navigate = useNavigate();
  return (
    <IconButton
      onClick={() => navigate(path, { state: { listingid: payload, project_id: project_id } })}
      sx={{
        w: '29px',
        h: '29px',
        ml: ml || '5px',
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
//     actions: ''
//   };
// });

// export const getprojetcsRows = (changeReq_list, setOpenD, projetct_id, searchText) => {
//   console.log(changeReq_list, 'gjhfdkgh');
//   if (Array.isArray(changeReq_list)) {
//     if (changeReq_list.length > 0) {
//       return changeReq_list.map((el) => {
//         return {
//           projects: (
//             <Typography sx={{ ...labelStyle(colors.nero, '14px', 500) }}>
//               {el?.project?.name}
//             </Typography>
//           ),
//           projectIncharge: (
//             <Typography sx={{ ...labelStyle(colors.grayLight, '12px', 300), textAlign: 'center' }}>
//               {el?.client_approved ? 'True' : 'False'}
//             </Typography>
//           ),
//           startDate: (
//             <Typography sx={{ ...labelStyle(colors.grayLight, '12px', 300), textAlign: 'center' }}>
//               {el.no_of_hours}
//             </Typography>
//           ),
//           endDate: (
//             <Typography sx={{ ...labelStyle(colors.grayLight, '12px', 300), textAlign: 'center' }}>
//               {el?.created_at?.slice(0, 10) || '-'}
//             </Typography>
//           ),
//           status: el.status,
//           actions: (
//             <Box
//               sx={{
//                 alignItems: 'center',
//                 display: 'flex',
//                 justifyContent: 'center'
//               }}>
//               <IconButton
//                 sx={{ width: '29px', height: '29px', ml: '10px', background: colors.darkSkyBlue }}
//                 onClick={() => setOpenD({ status: true, id: el?.id, type: 'edit' })}>
//                 <EditIcon />
//               </IconButton>
//               <IconButton
//                 sx={{ width: '29px', height: '29px', ml: '10px', background: colors.bgDelete }}
//                 onClick={() => setOpenD({ status: true, id: el?.id, type: 'delete' })}>
//                 <DeleteIcon />
//               </IconButton>
//               <ActionIcons
//                 ml="10px"
//                 bg={colors.darkBlue}
//                 path="/req-doc-view"
//                 payload={el?.id}
//                 project_id={projetct_id}>
//                 <DocumentIcon fill={colors.white} />
//               </ActionIcons>
//             </Box>
//           )
//         };
//       });
//     } else {
//       return [];
//     }
//   }
// };

export const getprojetcsRows = (changeReq_list, setOpenD, projetct_id, searchText) => {
  if (Array.isArray(changeReq_list)) {
    if (changeReq_list.length > 0) {
      return changeReq_list
        .filter((_item) => _item?.title?.toLowerCase().includes(searchText.toLowerCase()))
        .map((el) => {
          return {
            projects: (
              <Typography sx={{ ...labelStyle(colors.nero, '14px', 500) }}>{el?.title}</Typography>
            ),
            projectIncharge: (
              <Typography
                sx={{ ...labelStyle(colors.grayLight, '12px', 300), textAlign: 'center' }}>
                {el?.client_approved ? 'True' : 'False'}
              </Typography>
            ),
            startDate: (
              <Typography
                sx={{ ...labelStyle(colors.grayLight, '12px', 300), textAlign: 'center' }}>
                {el.no_of_hours}
              </Typography>
            ),
            endDate: (
              <Typography
                sx={{ ...labelStyle(colors.grayLight, '12px', 300), textAlign: 'center' }}>
                {el?.created_at?.slice(0, 10) || '-'}
              </Typography>
            ),
            status: el.status,
            actions: (
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                <IconButton
                  sx={{ width: '29px', height: '29px', ml: '10px', background: colors.darkSkyBlue }}
                  onClick={() => setOpenD({ status: true, id: el?.id, type: 'edit' })}>
                  <EditIcon />
                </IconButton>
                <IconButton
                  sx={{ width: '29px', height: '29px', ml: '10px', background: colors.bgDelete }}
                  onClick={() => setOpenD({ status: true, id: el?.id, type: 'delete' })}>
                  <DeleteIcon />
                </IconButton>
                <ActionIcons
                  ml="10px"
                  bg={colors.darkBlue}
                  path="/req-doc-view"
                  payload={el?.id}
                  project_id={projetct_id}>
                  <DocumentIcon fill={colors.white} />
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

export const headCells = [
  {
    id: 'projects',
    isBorder: true,
    // label: 'Employee ID'
    label: <Typography sx={{ ...labelStyle(colors.nero, '14px', 500) }}>{title}</Typography>
  },
  {
    id: 'projectIncharge',
    isBorder: true,

    textAlign: 'center',
    label: (
      <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), textAlign: 'center' }}>
        {appr_by_client}
      </Typography>
    )
  },
  {
    id: 'startDate',
    isBorder: true,

    textAlign: 'center',
    label: (
      <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), textAlign: 'center' }}>
        {hours}
      </Typography>
    )
  },
  {
    id: 'endDate',
    isBorder: true,

    label: (
      <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), textAlign: 'center' }}>
        {craete_date}
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
  path: PropTypes.string,
  ml: PropTypes.string,
  payload: PropTypes.string,
  project_id: PropTypes.string
  // handleData: PropTypes.func
};
