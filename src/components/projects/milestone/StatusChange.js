import { Box, MenuItem, Typography } from '@mui/material';
// import { useState } from 'react';
import CustomSelect from '../../form/CustomSelect';
// import { useNavigate } from 'react-router-dom';
import colors from '../../../theme/colors';
import { Wrapper, labelStyle } from '../style';
import PropTypes from 'prop-types';

const StatusChange = (props) => {
  const { options, setSelectProject, selectProject, onSelectVlaue, width, type } = props;
  // console.log(selectProject, 'hghjg');
  // const navigate = useNavigate();

  return (
    <Wrapper>
      <CustomSelect
        sx={{
          borderRadius: '6px',
          '& fieldset': {
            borderColor: 'white'
          }
        }}
        value={selectProject}
        onChange={(val) => {
          setSelectProject(val);
          onSelectVlaue(val, type);
        }}
        name="selectName"
        height="34px"
        width={width}>
        {options.map((opt, key) => {
          return (
            <MenuItem
              sx={{
                '&.MuiMenuItem-root.Mui-selected': { backgroundColor: colors.white }
              }}
              key={key}
              value={opt.key}>
              <Box
                // onClick={() => navigate(opt.path)}
                sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                {opt.icon ? opt.icon : ''}
                <Typography
                  sx={{
                    ...labelStyle(colors.darkblackblue, '12px', 500),
                    marginLeft: '5px'
                  }}>
                  {opt.value}
                </Typography>
              </Box>
            </MenuItem>
          );
        })}
      </CustomSelect>
    </Wrapper>
  );
};
StatusChange.propTypes = {
  options: PropTypes.array,
  setSelectProject: PropTypes.func,
  selectProject: PropTypes.string,
  onSelectVlaue: PropTypes.func,
  width: PropTypes.string,
  type: PropTypes.string
};
export default StatusChange;
