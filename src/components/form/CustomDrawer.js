import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';

import * as React from 'react';
import colors from '../../theme/colors';

const CustomDrawer = (props) => {
  const { open, setOpen, children, minWidth, maxWidth, overflow } = props;
  console.log(open, 'open');

  return (
    <Drawer
      sx={{
        '& .MuiPaper-root': {
          background: colors.ghostWhite,
          minWidth: minWidth || 600,
          maxWidth: maxWidth || 700,
          overflow: overflow && overflow
        }
      }}
      anchor={'right'}
      open={open}
      onClose={() => setOpen()}>
      {children}
    </Drawer>
  );
};

export default CustomDrawer;
CustomDrawer.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  children: PropTypes.func,
  minWidth: PropTypes.string,
  maxWidth: PropTypes.string,
  overflow: PropTypes.string
};
