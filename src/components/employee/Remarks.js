import { Box, Card, Typography } from '@mui/material';
import React, { useState } from 'react';
import colors from '../../theme/colors';
import {
  PermissionWrapper,
  RemarkHeroContainer,
  RemarksBoxWrap,
  RemarksContainer,
  labelStyle
} from './style';
// import UserInfo from '../employee/UserInfo';
import { DeleteMyIcon } from '../../theme/SvgIcons';
import { IconButtonStyle } from '../projects/document/style';
import { TextBox } from '../projects/milestone/style';
import CustomButton from '../form/CustomButton';
import CustomDrawer from '../form/CustomDrawer';
import AddRemarks from './AddRemarks';

const Remarks = () => {
  const [open, setOpen] = useState(false);
  const typeAry = [
    { title: 'A', name: 'Anil Khute', date: '15 March, 2022 at 04:20 pm' },
    { title: 'D', name: 'Doremon', date: '16 March, 2022 at 04:20 pm' }
  ];

  return (
    <PermissionWrapper>
      {/* <UserInfo /> */}
      <div style={{ marginTop: '30px' }}>
        <Card>
          <RemarksContainer>
            <div style={{ marginTop: '10px' }}>
              <Typography sx={{ ...labelStyle(colors.nero, '14px', 500) }}>Remarks</Typography>
            </div>
            <CustomButton variant={'editBtn'} label="Add" onClick={() => setOpen(true)} />
          </RemarksContainer>
          <Box sx={{ m: '30px 40px', pb: '5rem' }}>
            {typeAry.map((value, key) => {
              return (
                <div key={key}>
                  <RemarkHeroContainer>
                    <TextBox style={{ marginRight: '10px' }}>
                      <Typography sx={{ ...labelStyle(colors.white, '12px', 500) }}>
                        {value.title}
                      </Typography>
                    </TextBox>
                    <Typography
                      sx={{ ...labelStyle(colors.black, '12px', 500), marginRight: '10px' }}>
                      {value.name}
                    </Typography>
                    <Typography sx={labelStyle(colors.grayLight, '10px', 400)}>
                      {value.date}
                    </Typography>
                  </RemarkHeroContainer>
                  <RemarksBoxWrap>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography sx={{ ...labelStyle(colors.grayLight, '14px', 400) }}>
                        There are many variations of passages of Lorem Ipsum available, but the
                        majority have suffered
                      </Typography>
                    </Box>
                    <Box>
                      <IconButtonStyle bg={colors.bgDelete}>
                        <DeleteMyIcon />
                      </IconButtonStyle>
                    </Box>
                  </RemarksBoxWrap>
                </div>
              );
            })}
          </Box>
        </Card>
      </div>
      {open && (
        <CustomDrawer open={open} setOpen={() => setOpen(false)}>
          <AddRemarks
            setOpen={() => setOpen(false)}
            // projetclist={projetclist}
            // setProjetclist={setProjetclist}
          />
        </CustomDrawer>
      )}
    </PermissionWrapper>
  );
};

export default Remarks;
