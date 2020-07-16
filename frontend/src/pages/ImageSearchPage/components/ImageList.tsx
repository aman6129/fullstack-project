import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

import { useSearchGiphy } from '../../../api';
import ImageListImage from './ImageListImage';

interface ImageListProps {
  searchPhrase: string;
}

const ImageList: React.FC<ImageListProps> = ({ searchPhrase }) => {
  const { loading, data } = useSearchGiphy(searchPhrase);

  const loadingState = () => {
    return (
      <Grid item xs={12}>
        <Box textAlign='center'>
          <Typography variant='h6'>Loading...</Typography>
        </Box>
      </Grid>
    )
  };

  const generateImageList = () => {
    return data.map(image => (
      <Grid item sm={4} xs={12} key={image.external_id} style={{ textAlign: 'center' }}>
        <ImageListImage image={image} alt={image.title} />
      </Grid>
    ))
  }

  return (
    <Box>
      <Grid container spacing={1}>
        {loading && loadingState()}
        {!loading && data && generateImageList()}
      </Grid>
    </Box>
  );
}

export default ImageList;
