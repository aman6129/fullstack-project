import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

import UserFavoriteType from '../../../types/UserFavoriteType';
import FavoritedImage from './FavoritedImage';

interface FavoritesListProps {
  loading?: boolean;
  favorites: UserFavoriteType[];
}

const FavoritesList: React.FC<FavoritesListProps> = ({ favorites, loading }) => {
  const [images, setImages] = useState<UserFavoriteType[]>(favorites);

  useEffect(() => {
    setImages(favorites);
  }, [favorites]);

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
          <Typography variant='h6'>You haven't favorited any Gifs :(</Typography>
        </Box>
      </Grid>
    )
  }

  const removeFavoriteFromList = (id: number) => {
    const favoritesList = [...images];
    const imageIndex = favoritesList.findIndex(image => image.id === id);
    favoritesList.splice(imageIndex, 1);

    setImages(favoritesList);
  };
  
  const generateFavoritesList = () => {
    return images.map(image => (
      <Grid item sm={4} xs={12} key={image.id} style={{ textAlign: 'center' }}>
        <FavoritedImage image={image} onUnfavorite={() => removeFavoriteFromList(image.id)} />
      </Grid>
    ))
  };

  return (
    <Box>
      <Grid container spacing={2}>
        {loading && loadingState()}
        {!loading && !images.length && emptyState()}
        {!loading && images && generateFavoritesList()}
      </Grid>
    </Box>
  );
};

export default FavoritesList;
