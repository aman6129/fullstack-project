import React, { useState } from 'react';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import { IconButton, Card, CardMedia, CardActions } from '@material-ui/core';
import { StarBorder } from '@material-ui/icons';

import GiphyDataType from '../../../types/GiphyDataType';

interface ImageListImageProps {
  alt: string;
  image: GiphyDataType
}

const ImageListImage: React.FC<ImageListImageProps> = ({ image, alt }) => {
  const { user } = useAuth0();
  const [saving, setSaving] = useState<boolean>(false);
  
  const favoriteImage = async () => {
    setSaving(true);
    const { type, id, slug, url, title, images } = image;
    const payload = {
      slug,
      title,
      image_type: type,
      external_id: id,
      external_url: url,
      embed_url: images.fixed_height.url,
    };
  
    try {
      await axios.post('/api/user_favorites', {
        owner_email: user.email,
        ...payload,
      });
    } catch(e) {
      console.error(e);
    } finally {
      setSaving(false);
    }
  }

  const src = image.images.fixed_height.url;
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
