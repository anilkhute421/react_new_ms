/* eslint-disable import/no-unused-modules */
import styled from '@emotion/styled';
import { Box, Button, Chip, Divider, Select, TextField } from '@mui/material';
import colors from '../../theme/colors';
import { fontFamilys } from '../../theme/common_style';

export const ContainerStyle = styled(Box)({
  background: colors.gray90
});

export const labelStyle = (color = colors.black, fontSize = '22px', fontWeight = 400) => {
  const style = {
    fontFamily: fontFamilys.poppinsFont,
    fontStyle: 'normal',
    fontWeight,
    fontSize,
    textAlign: 'start',
    color,
    lineHeight: '22px'
  };
  return style;
};

export const FieldStyle = styled(TextField)({
  width: '100%',
  // maxWidth: '850px',
  //   marginTop: '27px',
  height: '42px',
  '& .MuiOutlinedInput-input': {
    marginLeft: '15px',
    paddingTop: '9px',
    paddingBottom: '5px'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: `1px solid ${colors.grayLight}`,
      borderRadius: '4px',
      height: '42px'
    },
    '&:hover fieldset': {
      border: `1px solid ${colors.grayLight}`
    }
  }
});

export const SelectStyle = styled(Select)({
  height: 40,
  width: '100%',
  background: colors.white,
  '& .MuiSvgIcon-root': {
    color: colors.blackDark
  }
});

export const DividerStyle = styled(Divider)({
  border: `1px solid ${colors.gray92}`,
  height: '51px',
  marginLeft: '45px',
  marginRight: '45px'
});

export const BoxWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '30px',
  flexWrap: 'wrap',
  justifyContent: 'space-between'
});

export const BoxWrap = styled(Box)(({ spaceBetween }) => ({
  background: colors.white,
  padding: '0px 40px 0px 10px', //'10px 40px 10px 10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: spaceBetween || 'end',
  height: '66px'
}));

export const ButtonStyle = styled(Button)({
  background: colors.darkSkyBlue,
  width: '122px',
  height: '43px',
  color: colors.white,
  marginRight: '25px'
});

export const FormFieldStyle = styled(TextField)(({ hasError }) => ({
  background: colors.white,
  border: `1px solid ${hasError ? colors.redError : colors.Gray90}`,
  borderRadius: '4px',
  height: '47px',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: '0px',
      borderRadius: '6px'
    },
    '& input': {
      padding: '12px'
    }
  }
}));

export const TextArea = styled(FormFieldStyle)({
  width: '100%',
  maxHeight: '100px',
  height: '103px'
});

export const Wrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});

export const CustomArea = styled.textarea({
  border: `1px solid ${colors.gray93}`,
  borderRadius: '6px',
  width: '100%',
  minHeight: '100px',
  resize: 'vertical'
});

export const ChipStyle = styled(Chip)(({ bg }) => ({
  borderRadius: '6px',
  background: bg,
  color: colors.white,
  fontWeight: 500,
  fontSize: '14px',
  marginRight: '10px'
}));

export const EmployeeContainer = styled(Box)({
  borderRadius: '10px',
  width: '100%'
});

export const ImageStyle = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

export const BoxStyle = styled(Box)`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  input[type='file'] {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
  }
`;

export const CrossBox = styled(Box)({
  display: 'flex',
  alignItems: 'self-start',
  flexDirection: 'row-reverse'
});

// emploplyee css
// remarks file using css
export const PermissionWrapper = styled(Box)({
  textAlign: 'center',
  marginTop: '20px'
});

export const RemarksBoxWrap = styled(Box)({
  border: `1px solid ${colors.Gray90}`,
  borderRadius: '4px',
  background: colors.whiteGrey,
  display: 'flex',
  alignItems: 'center',
  padding: '12px 17px',
  justifyContent: 'space-between',
  marginBottom: '15px'
});

export const RemarksContainer = styled(Box)({
  padding: '10px 35px',
  borderBottom: `1px solid ${colors.Gray90}`,
  display: 'flex',
  justifyContent: 'space-between',
  textAlign: 'center'
});

export const RemarkHeroContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '5px'
});
// remarks file using css

// view doc using css
export const DocBoxWrap = styled(Box)({
  border: `1px solid ${colors.gray68}`,
  borderRadius: '4px',
  background: colors.Gray94,
  display: 'flex',
  alignItems: 'center',
  padding: '2px 17px',
  justifyContent: 'space-between'
});

//UserInfo css

export const UserDetails = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

export const UserWrapper = styled(Box)({
  background: 'white',
  margin: '0 auto',
  padding: '15px',
  display: 'flex',
  textAlign: 'center',
  borderRadius: '10px',
  justifyContent: 'space-between'
});

export const UserImageWrapper = styled(Box)({
  background: 'white',
  width: '135px',
  height: '135px',
  borderRadius: '500px',
  backgroundColor: 'grey'
});

export const UserDetailWrapper = styled(Box)({
  background: 'white',
  width: '85%'
});

//Permission css
export const PermissionUserDeatils = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '70%'
});

export const SwicthContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '20px',
  borderBottom: `2px solid ${colors.gray91}`,
  paddingBottom: '20px'
  // width: '80%'
});

export const UserSwitch = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginTop: '20px',
  borderBottom: `2px solid ${colors.gray91}`,
  paddingBottom: '20px'
});

export const UserSetPermission = styled(Box)({
  background: 'white',
  marginTop: '30px',
  borderRadius: '10px',
  height: '100vh',
  width: '100%'
});

//userInfo css

export const UserInfoDetails = styled(Box)({
  background: 'white',
  marginTop: '30px',
  borderRadius: '10px',
  //   height: '100vh',
  width: '100%'
});
export const TableInput = styled.input`
  border: none;
  background: transparent;
`;
