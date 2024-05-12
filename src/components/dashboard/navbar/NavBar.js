import React, { useState } from 'react';
import { Box, IconButton, Avatar, Typography, List, ClickAwayListener } from '@mui/material';
import { NavBoxStyle, AvatarBox, IconButtonStyle, MenuBox, ChipStyle, ChipWrapper } from './style';
import { DownArrow, NotificationIcon, SidebarArrow, SunfocusLogo } from '../../../theme/SvgIcons';
import { SearchField } from '../../../utils/common_functions';
import Logout from './Logout';
// import zIndex from '@mui/material/styles/zIndex';

function NavBar() {
  const [isOpened, setIsOpened] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const handleClickAway = () => {
    setIsLogoutOpen(false);
  };
  return (
    <NavBoxStyle>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <AvatarBox>
          <SunfocusLogo />
          <IconButton onClick={() => setIsOpened(!isOpened)} sx={{ marginLeft: '9px' }}>
            <SidebarArrow />
          </IconButton>
        </AvatarBox>

        {/* <FieldStyle
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <SearchIcon />
              </InputAdornment>
            )
          }}
        /> */}
        <SearchField />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
        <IconButtonStyle>
          <NotificationIcon />
        </IconButtonStyle>
        <MenuBox onClick={() => setIsLogoutOpen(!isLogoutOpen)}>
          <Avatar>C</Avatar>
          <ChipWrapper>
            <Typography sx={{ fontSize: '12px', fontWeight: 500 }}>Clayton Santos</Typography>
            <ChipStyle label="Client" color="success" />
          </ChipWrapper>
          <DownArrow />
        </MenuBox>
        {/* <div style={{ position: 'absolute', top: '50px', right: '35px', background: 'green' }}> */}
        {isLogoutOpen && (
          <ClickAwayListener onClickAway={handleClickAway}>
            <List
              sx={{
                width: '72%',
                maxWidth: 360,
                bgcolor: 'white',
                height: '20%',
                position: 'absolute',
                top: '45px',
                right: '3px',
                zIndex: '9'
              }}>
              <Logout />
            </List>
          </ClickAwayListener>
        )}
      </Box>
    </NavBoxStyle>
  );
}
export default NavBar;
