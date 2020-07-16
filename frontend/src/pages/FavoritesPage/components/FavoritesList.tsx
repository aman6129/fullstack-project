import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

import FavoritedImage from './FavoritedImage';
import UserFavoriteType from '../../../types/UserFavoriteType';

interface FavoritesListProps {
  loading?: boolean;
  images: UserFavoriteType[];
}

const FavoritesList: React.FC<FavoritesListProps> = ({ images, loading }) => {
  const generateFavoritesList = () => {
    return images.map(image => (
      <Grid item xs={4} key={image.id} style={{ textAlign: 'center' }}>
        <FavoritedImage image={image} />
      </Grid>
    ))
  };

  return (
    <Box>
      <Grid container spacing={2}>
        {!loading && images && generateFavoritesList()}
      </Grid>
    </Box>
  );
};

export default FavoritesList;
