import { Box } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';
import { Outlet, useLocation } from 'react-router-dom';
import SideBar from './sidebar/SideBar';
import NavBar from './navbar/NavBar';
import colors from '../../theme/colors';
// import UserInfo from '../employee/UserInfo';

const MainContainer = styled(Box)({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column'
});

const ItemWrapper = styled(Box)({
  flex: 1,
  background: colors.gray90,
  padding: '20px 36px 50px 36px',
  height: 'calc(100vh - 84px)',
  overflow: 'auto',
  marginLeft: '200px',
  '::-webkit-scrollbar': {
    display: 'none'
  }
});
function Dashboard() {
  const checkModule = useLocation();

  console.log('checkModule', checkModule);
  return (
    <MainContainer>
      <NavBar />
      <Box sx={{ display: 'flex', flex: 1 }}>
        <SideBar />
        <ItemWrapper>
          {/* {checkModule.pathname === '/view-employee' ? (
            <UserInfo />
          ) : checkModule.pathname === '/permission' ? (
            <UserInfo />
          ) : checkModule.pathname === '/employee-doc' ? (
            <UserInfo />
          ) : checkModule.pathname === '/view-salary' ? (
            <UserInfo />
          ) : checkModule.pathname === '/remarks' ? (
            <UserInfo />
          ) : (
            ''
          )} */}
          <Outlet />
        </ItemWrapper>
      </Box>
    </MainContainer>
  );
}

export default Dashboard;
