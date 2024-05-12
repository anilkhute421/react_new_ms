import { Typography } from '@mui/material';
import React from 'react';
import colors from '../../theme/colors';
import CustomizedSwitches from './CustomizedSwitches';
import {
  PermissionUserDeatils,
  PermissionWrapper,
  SwicthContainer,
  UserSetPermission,
  UserSwitch,
  labelStyle
} from './style';
import {
  emp_create,
  emp_delete,
  emp_full_access,
  emp_per_heading,
  emp_read,
  emp_write
} from './empText';

const Permission = () => {
  return (
    <PermissionWrapper>
      <UserSetPermission>
        <Typography
          sx={{
            ...labelStyle(colors.black, '14px', 500),
            padding: '10px 20px',
            borderBottom: `2px solid ${colors.gray91}`
          }}>
          {emp_per_heading}
        </Typography>
        <UserSwitch>
          <Typography
            sx={{
              ...labelStyle(colors.grayLight, '14px', 500),
              padding: '10px 20px'
              // borderBottom: `2px solid ${colors.grayLight}`
            }}>
            {emp_full_access}
          </Typography>
          <CustomizedSwitches />
        </UserSwitch>
        <SwicthContainer>
          <div
            style={{
              width: '70%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
            <PermissionUserDeatils>
              <Typography
                sx={{
                  ...labelStyle(colors.grayLight, '14px', 500),
                  padding: '10px 20px'
                }}>
                {emp_read}
              </Typography>
              <CustomizedSwitches />
            </PermissionUserDeatils>
            <PermissionUserDeatils>
              <Typography
                sx={{
                  ...labelStyle(colors.grayLight, '14px', 500),
                  padding: '10px 20px'
                }}>
                {emp_write}
              </Typography>
              <CustomizedSwitches />
            </PermissionUserDeatils>
            <PermissionUserDeatils>
              <Typography
                sx={{
                  ...labelStyle(colors.grayLight, '14px', 500),
                  padding: '10px 20px'
                }}>
                {emp_create}
              </Typography>
              <CustomizedSwitches />
            </PermissionUserDeatils>
            <PermissionUserDeatils>
              <Typography
                sx={{
                  ...labelStyle(colors.grayLight, '14px', 500),
                  padding: '10px 20px'
                }}>
                {emp_delete}
              </Typography>
              <CustomizedSwitches />
            </PermissionUserDeatils>
          </div>
        </SwicthContainer>
      </UserSetPermission>
    </PermissionWrapper>
  );
};

export default Permission;
