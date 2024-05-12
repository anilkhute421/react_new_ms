import { Box, MenuItem, Typography } from '@mui/material';
import { Wrapper, labelStyle } from './style';
import { useState } from 'react';
import colors from '../../theme/colors';
import {
  ChangReqIcon,
  // CupIcon,
  CylenderIcon,
  FileAction,
  FlagIcon,
  LogisticGraph,
  TaskIcon,
  UserGroup
} from '../../theme/SvgIcons';
import CustomSelect from '../form/CustomSelect';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const projecttype = [
  {
    value: 'projectinfo',
    label: 'Project Info',
    icon: <FileAction fill={colors.lightRed} />,
    path: '/view-project'
  },
  {
    value: 'milestones',
    label: 'Milestones/Tasks',
    icon: <FlagIcon fill={colors.info} />,
    path: '/create-milestone'
  },
  {
    value: 'documents',
    label: 'Documents',
    icon: <CylenderIcon fill={colors.darkBlue} />,
    path: '/add-document'
  },
  {
    value: 'team',
    label: 'Team',
    icon: <UserGroup fill={colors.lightPink} />,
    path: '/add-team'
  },
  // {
  //   value: 'documents',
  //   label: 'Documents',
  //   icon: <CylenderIcon fill={colors.lightPink} />,
  //   path: '/req-doc-view'
  // },
  // {
  //   value: 'reporting',
  //   label: 'Reporting',
  //   icon: <CupIcon fill={colors.parrotGreen} />,
  //   path: '/reporting'
  // },
  {
    value: 'activity',
    label: 'Activity',
    icon: <LogisticGraph fill={colors.darkblackblue} />,
    path: '/view-activity'
  },
  {
    value: 'chaReq',
    label: 'Change Request',
    icon: <ChangReqIcon />,
    path: '/change-request'
  },
  {
    value: 'task',
    label: 'Task',
    icon: <TaskIcon />,
    path: '/task'
  }
];

const SelectProject = (props) => {
  // const selectvalue = useParams();
  const { option, height } = props || {};

  const [selectProject, setSelectProject] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  let allOpt = option ? option : projecttype;

  const setDefaultValuesInSelect = () => {
    if (location?.pathname.includes('view-project')) setSelectProject('projectinfo');
    if (location?.pathname.includes('create-milestone')) setSelectProject('milestones');
    if (location?.pathname.includes('add-document')) setSelectProject('documents');
    if (location?.pathname.includes('add-team')) setSelectProject('team');
    if (location?.pathname.includes('view-activity')) setSelectProject('activity');
    if (location?.pathname.includes('change-request')) setSelectProject('chaReq');
    if (location?.pathname.includes('task')) setSelectProject('task');
    if (location?.pathname.includes('view-employee')) setSelectProject('general-info');
    if (location?.pathname.includes('req-doc-view')) setSelectProject('chaReq');
  };

  useEffect(() => {
    setDefaultValuesInSelect();
  }, []);
  return (
    <Wrapper>
      <CustomSelect
        height={height}
        sx={{
          borderRadius: '10px',
          width: '243px',
          '& fieldset': {
            borderColor: option ? 'colors.gray90' : 'white'
          }
        }}
        value={selectProject}
        onChange={(val) => {
          console.log('val', val);
          setSelectProject(val);
        }}
        name="selectName">
        {(allOpt || []).map((opt, key) => {
          return (
            <MenuItem
              sx={{
                width: '243px',
                '&.MuiMenuItem-root.Mui-selected': { backgroundColor: colors.white }
              }}
              key={key}
              to={opt.path}
              onClick={() => {
                navigate(opt.path, { state: location?.state });
              }}
              value={opt.value}>
              <Typography
                sx={{
                  ...labelStyle('', '16px', 500),
                  display: 'flex',
                  alignItems: 'center'
                }}>
                <Box sx={{ mr: '20px', mt: '5px' }}>{opt.icon}</Box>
                {opt.label}
              </Typography>
            </MenuItem>
          );
        })}
      </CustomSelect>
    </Wrapper>
  );
};

SelectProject.propTypes = {
  option: PropTypes.array
};
export default SelectProject;
