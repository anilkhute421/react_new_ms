import { Box, IconButton, Menu } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { MenuDropDownIcon } from '../../theme/SvgIcons';
import CustomModal from './CustomModal';
// import { viewMilestoneAction } from '../../redux/project/action';

export const MenuStyle = styled(Menu)({
  '&  li': {
    width: '150px'
  }
});

const CustomMenu = (props) => {
  const { option, onChange, name, rest, id, getmilestoneid, type } = props;
  console.log(getmilestoneid, 'sdsdsadas');

  const [anchorEl, setAnchorEl] = useState(null);
  const [deleteModel, setDeleteModel] = useState(false);
  const open = Boolean(anchorEl);

  console.log(id, 'list');
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handlemenuClick = (item) => {
    handleClose();
    console.log(item, 'item');
    if (item.value === 'delete') {
      setDeleteModel(true);
    } else {
      // setOpenE();
    }
    onChange(item, id);
  };
  return (
    <Box>
      <IconButton onClick={handleClick}>
        <MenuDropDownIcon />
      </IconButton>
      {/* </Box> */}

      <MenuStyle {...rest} name={name} anchorEl={anchorEl} open={open} onClose={handleClose}>
        {option.map((opt, key) => {
          return (
            <MenuItem key={key} onClick={() => handlemenuClick(opt)}>
              {opt.label}
            </MenuItem>
          );
        })}
      </MenuStyle>
      {deleteModel && (
        <CustomModal
          open={deleteModel}
          setOpen={() => setDeleteModel(false)}
          id={id}
          getmilestoneid={getmilestoneid}
          type={type}></CustomModal>
      )}
    </Box>
  );
};

CustomMenu.propTypes = {
  option: PropTypes.array,
  label: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  rest: PropTypes.func,
  value: PropTypes.string,
  id: PropTypes.string,
  getmilestoneid: PropTypes.string,
  type: PropTypes.string
  // setOpenE: PropTypes.func
};

export default CustomMenu;
