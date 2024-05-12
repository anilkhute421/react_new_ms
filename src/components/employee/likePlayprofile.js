import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { UserWrapper, labelStyle } from './style';
import colors from '../../theme/colors';
// import CustomizedSwitches from './CustomizedSwitches';

import styled from '@emotion/styled';
import profile from '../../assets/profile.png';

const LikePlay = () => {
  return (
    <UserWrapper>
      <div style={{ width: '13%', padding: '15px' }}>
        <UserImageWrapper>
          <ImageStyle src={profile} />
        </UserImageWrapper>
      </div>
      <UserDetailWrapper>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '30%',
            float: 'right'
          }}>
          <ButtonStyle>
            <Typography sx={{ ...labelStyle(colors.white, '14px', 500) }}>Activate</Typography>
          </ButtonStyle>
          <EditButton>
            <Typography sx={{ ...labelStyle('#242424', '14px', 500), whiteSpace: 'nowrap' }}>
              Return to Edit
            </Typography>
          </EditButton>
        </div>
        <div style={{ display: 'flex', marginTop: '30px' }}>
          <Typography sx={{ ...labelStyle(colors.nero, '28px', 700), letterSpacing: '0.05em' }}>
            Navjeet Mandava
          </Typography>
        </div>
        <div style={{ display: 'flex', margin: '10px 0px' }}>
          <Typography sx={labelStyle('#7B7F91', '16px', 400)}>Navjeet, 24 Male</Typography>
          <Typography sx={{ ...labelStyle('#7B7F91', '16px', 400) }}>
            | jeniffer.laurance23@gmail.com
          </Typography>
        </div>
        <div
          style={{
            width: '90px',
            height: '27px',
            background: '#D9D9D9',
            borderRadius: '10px',
            padding: '5px 10px'
          }}>
          <Typography sx={{ ...labelStyle('#242424', '10px', 400) }}>Under Review</Typography>
        </div>
      </UserDetailWrapper>
    </UserWrapper>
  );
};

export default LikePlay;

export const UserImageWrapper = styled(Box)({
  background: 'white',
  width: '105px',
  height: '105px',
  borderRadius: '50%',
  backgroundColor: 'grey',
  overflow: 'hidden'
});

export const ImageStyle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UserDetailWrapper = styled(Box)({
  background: 'white',
  width: '85%'
});

export const ButtonStyle = styled(Button)({
  width: '103px',
  height: '39px',
  // boxShadow: '0px 16px 32px rgba(20, 30, 73, 0.15)',
  borderRadius: '10px',
  padding: '10px 22px',
  background: 'linear-gradient(268.55deg, #FF483C 0%, #FF2C5A 100%)',
  float: 'right',
  textTransform: 'none'
});

export const EditButton = styled(Button)({
  width: '142px',
  height: '39px',
  background: '#F0F0F0',
  // boxShadow: '0px 16px 32px rgba(20, 30, 73, 0.15)',
  borderRadius: '10px',
  padding: '10px 22px',
  float: 'right',
  textTransform: 'none'
});
