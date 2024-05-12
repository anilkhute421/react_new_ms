import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';
import PropTypes from 'prop-types';
import { fontFamilys } from '../../theme/common_style';
import colors from '../../theme/colors';

const StyledButton = styled(Button)(({ bg, width }) => ({
  background: bg,
  textTransform: 'capitalize',
  width: width,
  fontFamily: `${fontFamilys.poppinsFont}`,
  '&:hover': {
    background: bg ? bg : colors.darkblackblue
  }
}));
const CustomButton = (props) => {
  const { label, bg, onClick, children, width, iconAlign, variant, type, color } = props;
  return (
    <StyledButton
      width={width}
      type={type || 'button'}
      onClick={() => onClick && onClick()}
      variant={variant || 'contained'}
      bg={bg}>
      <Box
        sx={{
          flexDirection: iconAlign === 'right' ? '' : 'row-reverse',
          display: 'flex',
          alignItems: 'center',
          color: color
        }}>
        {label}
      </Box>
      {children && children}
    </StyledButton>
  );
};
CustomButton.propTypes = {
  label: PropTypes.string,
  bg: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  width: PropTypes.string,
  iconAlign: PropTypes.string,
  variant: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string
};
export default CustomButton;
