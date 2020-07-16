import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

import ImageListImage from './ImageListImage';
import ImageType from '../types/ImageType';

interface ImageListProps {
  loading?: boolean;
  images: ImageType[];
}

const ImageList: React.FC<ImageListProps> = ({ images, loading }) => {

  const loadingState = () => {
    return (
      <Grid item xs={12}>
        <Box textAlign='center'>
          <Typography variant='h6'>Loading...</Typography>
        </Box>
      </Grid>
    )
  };

  const emptyState = () => {
    return (
      <Grid item xs={12}>
        <Box>
          <Typography variant='h6'>Nothing found, try a different search.</Typography>
        </Box>
      </Grid>
    )
  }

  const generateImageList = () => {
    return images.map(image => (
      <Grid item xs={4} key={image.external_id} style={{ textAlign: 'center' }} >
        <ImageListImage image={image} alt={image.title} />
      </Grid>
    ))
  }

  return (
    <Box>
      <Grid container spacing={1}>
        {loading && loadingState()}
        {!loading && !images && emptyState()}
        {!loading && images && generateImageList()}
      </Grid>
    </Box>
  );
}

export default ImageList;
