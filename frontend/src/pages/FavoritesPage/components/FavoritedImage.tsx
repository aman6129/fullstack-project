import React from 'react';
import { IconButton, Card, CardMedia, CardActions } from '@material-ui/core';
import { Star } from '@material-ui/icons';

import UserFavoriteType from '../../../types/UserFavoriteType';

interface FavoritedImageProps {
  image: UserFavoriteType;
}

const FavoritedImage: React.FC<FavoritedImageProps> = ({ image }) => {
  const { embed_url, title } = image;
  return (
  <Card>
    <CardMedia src={embed_url} alt={title} component='img' />
    <CardActions>
      <IconButton 
        aria-label="favorite"
        color="primary"
      >
        <Star />
      </IconButton>
    </CardActions>
  </Card>
  )
}

export default FavoritedImage;
