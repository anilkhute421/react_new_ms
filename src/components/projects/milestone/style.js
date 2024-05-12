/* eslint-disable import/no-unused-modules */
import styled from '@emotion/styled';
import {
  CardActions,
  Grid,
  IconButton,
  Box,
  Badge,
  TextField,
  Button,
  AvatarGroup,
  Avatar
} from '@mui/material';
import colors from '../../../theme/colors';
import { fontFamilys } from '../../../theme/common_style';

export const textStyle = (color = colors.black, fontSize = '22px', fontWeight = 400) => {
  const style = {
    fontFamily: fontFamilys.poppinsFont,
    fontStyle: 'normal',
    fontWeight,
    fontSize,
    textAlign: 'start',
    color,
    lineHeight: '20px'
  };
  return style;
};

export const GridItem = styled(Grid)`
  margin-bottom: 13px;
`;

export const AddIconButton = styled(IconButton)`
  background: ${colors.pink80};
  margin-top: 5px;
  margin-left: 5px;
`;

export const CardActionsStyle = styled(CardActions)`
  background: ${colors.white};
  padding: 25px;
`;

export const MsgBox = styled(Box)({
  boxShadow: '0px 16px 32px rgba(20, 30, 73, 0.05)',
  borderRadius: '6px',
  padding: '20px'
});
export const ChatInput = styled(Box)({
  background: colors.white,
  boxShadow: '0px -16px 32px rgba(20, 30, 73, 0.05)',
  borderRadius: '0px 6px 0px 0px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px'
});

export const ChatContainer = styled(Box)({
  background: colors.ghostWhite91,
  alignItems: 'center',
  justifyContent: 'end',
  padding: '0px 10px',
  height: '70vh',
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '100vh',
  overflow: 'scroll',
  '::-webkit-scrollbar': {
    width: '0px'
  }
});

export const MainScroll = styled(Grid)({
  // width: 'CALC(100% - 355px)',
  maxHeight: '100vh',
  overflow: 'scroll',
  '::-webkit-scrollbar': {
    width: '0px'
  }
});

export const MainStatus = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginRight: '25px'
});

export const IconWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '24px'
});

export const SelectContiner = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

export const MainIcons = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

export const ImageSize = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 10px 5px 10px'
});

export const FileName = styled(Box)({});

export const TextBox = styled(Box)({
  width: '28px',
  height: '28px',
  background: colors.lightRed,
  boxShadow: '0px 8px 24px rgba(20, 30, 73, 0.1)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export const ImageContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '12px 12px 0px 12px'
});

export const ImageFunction = styled(Box)({
  background: colors.white,
  borderBottomLeftRadius: '6px',
  borderBottomRightRadius: '6px'
});

export const BoxLinks = styled(Box)({
  margin: '30px 0px'
});

export const TextArea = styled(Box)({
  paddingTop: '16px'
});

export const CustomArea = styled.textarea({
  border: `1px solid ${colors.gray93}`,
  borderRadius: '6px',
  width: '100%',
  minHeight: '100px',
  padding: '28px 10px 0px 10px'
});

export const AvatarStyle = styled(Avatar)(({ bgcolor }) => ({
  width: '32px',
  height: '32px',
  bgcolor: bgcolor,
  border: 'none !important',
  boxShadow: '0px 8px 24px rgba(20, 30, 73, 0.1)'
}));

export const ToggleContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '20px'
});

export const BoxWrapData = styled(Box)({
  background: colors.ghostWhite91,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  zIndex: '9'
});

export const BoxWrapRightData = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginRight: '30px'
});

export const AvatarGroupStye = styled(AvatarGroup)({
  padding: '17px 0px 17px 0px'
});

export const BoxStartDate = styled(Box)({
  display: 'flex'
});

export const StyledBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    backgroundColor: colors.activeGreen,
    color: colors.activeGreen,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""'
    }
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0
    }
  }
}));

export const FormFieldStyle = styled(TextField)(() => ({
  background: colors.white,
  borderRadius: '4px',
  border: `none`,
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none'
    },
    '& input': {
      padding: '14px 14px 0px 0px'
    }
  }
}));

export const BoxRighContainer = styled(Box)({
  background: colors.ghostWhite91,
  borderRadius: '0px 6px 0px 0px',
  maxHeight: '100vh'
});

export const ButtonContainer = styled(Box)({
  display: 'flex',
  marginTop: '4px'
});

export const CommentButton = styled(Button)(() => ({
  width: '200px',
  height: '43px',
  color: colors.white,
  borderRadius: 'inherit',
  boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.25)'
}));

export const ActivityButton = styled(Button)({
  background: colors.darkblackblue,
  width: '200px',
  height: '43px',
  color: colors.white,
  borderRadius: 'inherit',
  boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.25)'
});
