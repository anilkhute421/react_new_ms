import React, { useState } from 'react';
import { List, ListItemText, ListItemButton } from '@mui/material';
import { SidebarBox, ListItemStyle, LinkStyle } from './style';
import {
  ReportingIcon,
  EmployeesIcon,
  LmsIcon,
  NotificationIcon,
  SettingIcon,
  HomeIcon,
  ProjectsIcon,
  SidebarSelected
} from '../../../theme/SvgIcons';

const menuItems = [
  {
    id: 1,
    name: 'Dashboard',
    icon: <HomeIcon />,
    path: '/dashboard',
    show: true
  },
  {
    id: 2,
    name: 'Projects',
    icon: <ProjectsIcon />,
    path: '/project',
    show: true
  },
  {
    id: 3,
    name: 'Reporting',
    icon: <ReportingIcon />,
    path: '/reporting',
    show: true
  },
  {
    id: 4,
    name: 'Employee',
    icon: <EmployeesIcon />,
    path: '/employee',
    show: true
  },
  {
    id: 5,
    name: 'LMS',
    icon: <LmsIcon />,
    path: '/lms',
    show: true
  },
  {
    id: 6,
    name: 'Notification',
    icon: <NotificationIcon />,
    path: '/notification',
    show: true
  },
  {
    id: 7,
    name: 'Setting',
    icon: <SettingIcon />,
    path: '/setting',
    show: true
  }
];
function SideBar() {
  const [selectedMenu, setSelectedMenu] = useState(0);
  return (
    <SidebarBox>
      <List>
        {menuItems.map((_item, key) => (
          <LinkStyle display={_item.show ? '' : 'none'} key={key} to={_item.path}>
            <ListItemStyle key={_item.id} disablePadding>
              {selectedMenu === _item.id && <SidebarSelected />}
              <ListItemButton onClick={() => setSelectedMenu(_item.id)}>
                {_item.icon}
                <ListItemText primary={_item.name} />
              </ListItemButton>
            </ListItemStyle>
          </LinkStyle>
        ))}
      </List>
    </SidebarBox>
  );
}

export default SideBar;
