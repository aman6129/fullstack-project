import React from 'react';
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Typography, Grid, Hidden } from '@material-ui/core';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const NavBar: React.FC = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <Box height='60px' px={2} display='flex' bgcolor='wheat'>
      <Grid container spacing={1} alignItems='center'>
        <Grid item sm={8} xs={12}>
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
        </Grid>
        <Hidden xsDown>
          <Grid item sm={4}>
            <Box>{isAuthenticated && user && (
              <Typography variant='subtitle2' align='right'>{user.name}</Typography>
            )}</Box>
          </Grid>
        </Hidden>
      </Grid>
    </Box>
  )
}

export default NavBar;
