import { MouseEvent, useState } from 'react';

import { Mail, Notifications, Pets } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
});

const Search = styled('div')(({theme}) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%'
}));

const Icons = styled(Box)(({theme}) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex'
  }
}));

const UserBox = styled(Box)(({theme}) => ({
  display: 'none',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.down('sm')]: {
    display: 'flex'
  }
}));

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const avatar =
    <Avatar
      sx={{height: '30px', width: '30px'}}
      src='https://pickaface.net/gallery/avatar/20151109_144853_2380_sample.png'
      onClick={handleClick}
    />;

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography
          variant='h6'
          sx={{
            display: {
              xs: 'none',
              sm: 'block'
            }}}
        >
          Navbar
        </Typography>
        <Pets
          sx={{
            display: {
              xs: 'block',
              sm: 'none'
            }}}
        />
        <Search>
          <InputBase placeholder='search...' />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error"><Mail /></Badge>
          <Badge badgeContent={4} color="error"><Notifications /></Badge>
          {avatar}
        </Icons>
        <UserBox>
          {avatar}
          <Typography>John</Typography>
        </UserBox>

        <Menu
          open={menuOpen}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </StyledToolbar>
    </AppBar>
  );
}
