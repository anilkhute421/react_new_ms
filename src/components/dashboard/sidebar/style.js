import styled from '@emotion/styled';
import { Box, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import colors from '../../../theme/colors';

export const SidebarBox = styled(Box)({
  background: colors.white,
  position: 'fixed',
  // top: '80px',
  // height: '100%',
  overflow: 'auto'
});

export const ListItemStyle = styled(ListItem)({
  width: '196px',
  color: colors.grayLight,
  fontFamily: 'Inter',
  fontWeight: 500,
  fontSize: '14px',
  '& span': {
    marginLeft: '12px'
  },
  '&.active, &:hover, &.active:hover': {
    background: colors.white,
    '& path': {
      fill: colors.darkSkyBlue
    }
  }
});

export const LinkStyle = styled(Link)(({ display }) => ({
  textDecoration: 'none',
  color: 'inherit',
  display: display && display
}));
