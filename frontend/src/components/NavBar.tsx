import React from 'react';
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Typography } from '@material-ui/core';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const NavBar: React.FC = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <Box height='60px' px={2} display='flex' bgcolor='wheat'>
      <Box alignSelf='center' display="flex" flex={1}>
        {!isAuthenticated && (
          <Box alignSelf='center' mr={1}>
            <LoginButton />
          </Box>
        )}
        {isAuthenticated && (
          <Box alignSelf='center' mr={1}>
            <LogoutButton />
          </Box>
        )}
        <Box alignSelf='center' mr={1}>
          <Button component={Link} to='/' variant='text'>Giphy Search</Button>
        </Box>
        {isAuthenticated && (
          <Box alignSelf='center'>
            <Button component={Link} to='/favorites' variant='text' href='/favorites'>Favorites</Button>
          </Box>
        )}
      </Box>
      <Box alignSelf='center'>{isAuthenticated && user && (
        <Typography variant='subtitle2'>{user.name}</Typography>
      )}</Box>
    </Box>
  )
}

export default NavBar;
