import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MyComponent = () => {
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button onClick={handleClick}>Catégogies</button>
      
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuProps={MenuProps}
      >
        <MenuItem onClick={handleClose}>Romance</MenuItem>
        <MenuItem onClick={handleClose}>Action </MenuItem>
        <MenuItem onClick={handleClose}>Comédie</MenuItem>
      </Menu>
    </div>
  );
};

export default MyComponent;
