import React from 'react';
import { AppBar, Toolbar, Typography, styled, InputBase } from '@mui/material';
import { Pets } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

const Icons = styled('Box')(({ theme }) => ({
  backgroundColor: 'white',
}));

const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
          LAMA DEV{' '}
        </Typography>
        <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase placeholder='search..'></InputBase>
        </Search>
        <Icons>icons</Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
