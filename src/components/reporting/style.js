import styled from '@emotion/styled';
import colors from '../../theme/colors';
import { fontFamilys } from '../../theme/common_style';
import { Box, Divider } from '@mui/material';

export const reportingText = (color = colors.nero, fontSize = '22px', fontWeight = 400) => {
  const style = {
    fontFamily: fontFamilys.poppinsFont,
    fontStyle: 'normal',
    fontWeight: fontWeight,
    fontSize: fontSize,
    textAlign: 'start',
    color: color
  };
  return style;
};

export const DividerStyle = styled(Divider)({
  marginLeft: '20px',
  marginRight: '20px',
  border: `1px solid ${colors.Gray90}`,
  height: '43px'
});

export const BoxWrapper = styled(Box)({
  background: colors.Gray94,
  border: `1px solid ${colors.gray68}`,
  borderRadius: '10px',
  padding: '15px 15px 30px 23px'
});
