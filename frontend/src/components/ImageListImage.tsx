import React, { useState } from 'react';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import { IconButton, Card, CardMedia, CardActions } from '@material-ui/core';
import { StarBorder } from '@material-ui/icons';

import ImageType from '../types/ImageType';

interface ImageListImageProps {
  alt: string;
  image: ImageType;
}

const ImageListImage: React.FC<ImageListImageProps> = ({ image, alt }) => {
  const { user } = useAuth0();
  const { embed_url: src } = image;
  const [saving, setSaving] = useState<boolean>(false);
  
  const favoriteImage = async () => {
    setSaving(true);
    try {
      await axios.post('/api/user_favorites', {
        owner_email: user.email,
        ...image,
      });
    } catch(e) {
      console.error(e);
    } finally {
      setSaving(false);
    }
  }

  return (
    <Card>
      <CardMedia src={src} alt={alt} component='img' />
      <CardActions>
        <IconButton 
          aria-label="favorite"
          color="primary"
          disabled={saving}
          onClick={favoriteImage}
        >
          <StarBorder />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ImageListImage;
