import React from 'react';

import { Box, Grid, Typography } from '@material-ui/core';

import { useSearchGiphy } from '../../../api';

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

  const emptyState = () => {
    return (
      <Grid item xs={12}>
        <Box textAlign='center'>
          <Typography variant='h6'>Nothing found, try a different search.</Typography>
        </Box>
      </Grid>
    )
  }

  const generateImageList = () => {
    return data.map(image => (
      <Grid item xs={4} key={image.id} style={{ textAlign: 'center' }}>
        <img src={image.images.fixed_height.url} alt={image.slug} />
      </Grid>
    ))
  }

  return (
    <Box>
      <Grid container spacing={1}>
        {loading && loadingState()}
        {!loading && !data && emptyState()}
        {!loading && data && generateImageList()}
      </Grid>
    </Box>
  );
}

export default ImageList;
