import React from 'react';

import { Box, Button } from '@material-ui/core';

const NavBar: React.FC = () => {
  return (
    <Box height='60px' px={2} display='flex' flexDirection='row-reverse' bgcolor='darkorange'>
      <Button variant='text' href='/favorites'>Favorites</Button>
      <Button variant='text' href='/'>Home</Button>
    </Box>
  )
}

export default NavBar;
