import styled from '@emotion/styled';
import { Box, IconButton } from '@mui/material';
import colors from '../../../theme/colors';

export const BoxWrap = styled(Box)({
  border: `1px solid ${colors.gray68}`,
  borderRadius: '4px',
  background: colors.Gray94,
  display: 'flex',
  alignItems: 'center',
  padding: '2px 17px',
  justifyContent: 'space-between'
});

export const IconButtonStyle = styled(IconButton)(({ bg }) => ({
  background: bg,
  marginLeft: '7px',
  width: '29px',
  height: '29px',
  '&:hover': {
    background: bg
  }
}));
