import React, { useState } from 'react';

import { Box, TextField } from '@material-ui/core';
import ImageList from './components/ImageList';

const ImageSearchPage: React.FC = () => {
  let timeoutID: NodeJS.Timeout;
  const [searchPhrase, setSearchPhrase ] = useState<string>('');


  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timeoutID) clearTimeout(timeoutID);
    const value = e.target.value;
    timeoutID = setTimeout(() => setSearchPhrase(value), 500);
  }

  return (
    <Box p={3}>
      <Box>
        <TextField label="Search Gifs" variant="outlined" fullWidth onChange={onSearchChange} />
      </Box>
      <Box py={2}>
        <ImageList searchPhrase={searchPhrase} />
      </Box>
    </Box>
  );
}

export default ImageSearchPage;
