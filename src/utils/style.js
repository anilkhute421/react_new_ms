import styled from '@emotion/styled';
import { Box, Card } from '@mui/material';
import colors from '../theme/colors';

export const NotFoundCard = styled(Card)({
  marginTop: '30px',
  height: '300px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
});

export const textStyle = () => {
  const style = {
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: '16px',
    color: colors.grayLight,
    width: '180px'
  };
  return style;
};

export const CardStyle = styled(Card)(({ bg }) => ({
  height: '52px',
  minWidth: '155px',
  marginRight: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  marginBottom: '20px',
  backgroundColor: bg,
  color: colors.white,
  boxShadow: 'none',
  '&: last-child': {
    marginRight: 0
  }
}));
export const statusstyle = {
  fontFamily: 'Poppins',
  fontWeight: 500,
  fontSize: '16px',
  marginLeft: '16px'
};

export const BoxWrap = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between'
});
