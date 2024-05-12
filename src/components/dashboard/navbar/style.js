import styled from '@emotion/styled';
import { Box, Chip, IconButton, TextField } from '@mui/material';
import colors from '../../../theme/colors';

export const NavBoxStyle = styled(Box)({
  // width: 'calc(100% - 220px)',
  height: '84px',
  background: colors.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginRight: '20px'
});

export const FieldStyle = styled(TextField)({
  background: colors.grayLight91,
  marginLeft: '15px',
  width: '100%',
  borderRadius: '6px',
  '& .MuiOutlinedInput-input': {
    background: colors.grayLight91,
    color: colors.grayLight,
    marginLeft: '15px',
    padding: '10px'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: '0px',
      borderRadius: '6px'
    },
    '&:hover fieldset': {
      border: '1px'
    },
    '&.Mui-focused fieldset': {
      border: '1px'
    }
  }
});

export const AvatarBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  paddingTop: '22px',
  paddingBottom: '22px',
  borderBottom: `1px solid ${colors.grayLight91}`,
  marginLeft: '25px',
  width: '192px'
});

export const IconButtonStyle = styled(IconButton)({
  width: '44px',
  height: '44px',
  background: colors.grayLight91,
  marginRight: '20px'
});

export const MenuBox = styled(Box)({
  background: colors.grayLight91,
  height: '44px',
  borderRadius: '40px',
  display: 'flex',
  alignItems: 'center',
  padding: '4px 17px 4px 4px',
  cursor: 'pointer'
});

export const ChipStyle = styled(Chip)({
  height: '20px',
  background: colors.darkGreen
});

export const ChipWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  marginLeft: '10px',
  marginRight: '17px'
});
