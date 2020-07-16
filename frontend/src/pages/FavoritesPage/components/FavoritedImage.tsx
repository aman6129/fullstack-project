import React, {useState} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import { IconButton, Card, CardMedia, CardActions } from '@material-ui/core';
import { Star } from '@material-ui/icons';

import UserFavoriteType from '../../../types/UserFavoriteType';

interface FavoritedImageProps {
  image: UserFavoriteType;
  onUnfavorite: () => void;
}

const FavoritedImage: React.FC<FavoritedImageProps> = ({ image, onUnfavorite }) => {
  const { user } = useAuth0();
  const [deleting, setDeleting] = useState<boolean>(false);
  const { embed_url, title } = image;

  const unFavorite = async () => {
    setDeleting(true);
    try {
      await axios.delete(`/api/user_favorites/${image.id}`, {
        params: {
          owner_email: user.email,
        }
      });

      onUnfavorite();
    } catch (e) {
      console.error(e);
      setDeleting(false);
    }
  }

  return (
  <Card>
    <CardMedia src={embed_url} alt={title} component='img' />
    <CardActions>
      <IconButton 
        aria-label="favorite"
        color="primary"
        disabled={deleting}
        onClick={unFavorite}
      >
        <Star />
      </IconButton>
    </CardActions>
  </Card>
  )
}

export default FavoritedImage;
