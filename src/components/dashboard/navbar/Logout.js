import * as React from 'react';
// import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import ImageIcon from '@mui/icons-material/Image';
// import WorkIcon from '@mui/icons-material/Work';
import { LogoutIcon, ProfileIcon } from '../../../theme/SvgIcons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signInRes } from '../../../redux/sign-in/action';
import { toast } from 'react-toastify';

export default function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(signInRes(''));
    toast.success('Logout Successfully');
    navigate('/');
  };

  return (
    <>
      <ListItem style={{ background: 'inherit', cursor: 'pointer' }}>
        <ListItemAvatar>
          <ProfileIcon />
        </ListItemAvatar>
        <ListItemText primary="Profile" />
      </ListItem>
      <ListItem style={{ background: 'inherit', cursor: 'pointer' }} onClick={handleLogout}>
        <ListItemAvatar>
          <LogoutIcon />
        </ListItemAvatar>
        <ListItemText primary="Logout" />
      </ListItem>
    </>
  );
}
