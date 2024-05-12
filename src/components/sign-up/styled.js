import Card from '@mui/material/Card';
import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import colors from '../../theme/colors';

export const CardStyle = styled(Card)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  flexDirection: 'column',
  boxShadow: '0px 24px 38px rgba(0, 0, 0, 0.18)',
  border: `1px solid ${colors.Gray90}`,
  borderRadius: '6px',
  padding: '41px 41px 50px 41px',
  marginTop: '4rem',
  background: colors.ghostWhite
});

export const BoxWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  background: 'linear-gradient(0deg, rgba(182,149,251,1) 50%, rgba(229,229,229,1) 50%);',
  minHeight: '100vh'
});

export const ButtonStyle = styled(Button)({
  width: '100%',
  textTransform: 'capitalize',
  background: colors.darkSkyBlue,
  height: '56px',
  marginTop: '18px'
});

export const LinkStyle = styled(Typography)({
  color: colors.black,
  marginLeft: '5px',
  fontWeight: 700,
  cursor: 'pointer'
});
