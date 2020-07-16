import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

import { ImageList } from '../../../components';

import { useSearchGiphy } from '../../../api';

interface ImageListProps {
  searchPhrase: string;
}

const ImageSearchResults: React.FC<ImageListProps> = ({ searchPhrase }) => {
  const { loading, data } = useSearchGiphy(searchPhrase);

  return (
    <Box>
      <ImageList 
        loading={loading}
        images={data}
      />
    </Box>
  );
}

export default ImageSearchResults;
