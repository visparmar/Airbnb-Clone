import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import './styles.css'
export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="profile-menu-flex"
      >
        <MenuRoundedIcon sx={{color:"grey"}}/>
        <AccountCircleRoundedIcon sx={{color:"grey"}}/>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{".MuiPaper-root":{
            marginTop:"1rem",
        borderRadius:"1rem",
        minWidth:"250px",
        boxShadow:"0 1px 2px rgb(0 0 0 / 15%),0 4px 12px rgb(0 0 0 /10%)"}}}
      >
        <MenuItem className='manu-item' onClick={handleClose}>Sign up</MenuItem>
        <MenuItem className='manu-item' onClick={handleClose}>Log in</MenuItem>
        <div style={{height:'1px', backgroundColor:"var(--grey)",width:"100%"}}/>
        <MenuItem className='manu-item' onClick={handleClose}>Airbnb your home</MenuItem>
        <MenuItem className='manu-item' onClick={handleClose}>Host an experience</MenuItem>
        <MenuItem className='manu-item' onClick={handleClose}>Help</MenuItem>
      </Menu>
    </div>
  );
}

