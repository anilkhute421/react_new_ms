import styled from '@emotion/styled';
import { FormControlLabel, Switch } from '@mui/material';
import colors from '../../theme/colors';
import PropTypes from 'prop-types';

const SwitchStyle = styled(Switch)(() => ({
  padding: 8,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    background: colors.white,
    border: `1px solid ${colors.Gray90}`
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    background: colors.silver,
    marginLeft: '-2px',
    marginTop: '1px'
  },
  '& .MuiSwitch-switchBase:hover': {
    background: 'transparent'
  }
}));
const CustomSwitch = (props) => {
  const { sx } = props;
  return <FormControlLabel sx={sx} control={<SwitchStyle />} />;
};

CustomSwitch.propTypes = {
  sx: PropTypes.object
};
export default CustomSwitch;
