import React from 'react';

import { Box, TextField } from '@material-ui/core';

const ImageSearchPage: React.FC = () => {
  return (
    <Box p={3}>
      <TextField label="search" variant="outlined" fullWidth />
    </Box>
  );
}

export default ImageSearchPage;
