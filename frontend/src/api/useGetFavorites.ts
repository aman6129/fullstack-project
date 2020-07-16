import React, { useState, useEffect } from 'react';
import axios from 'axios';

import UserFavoriteType from '../types/UserFavoriteType';

interface UseGetFavoritesResult {
  loading: boolean;
  favorites: UserFavoriteType[];
}

const useGetFavorites = (owner: string): UseGetFavoritesResult => {
  const [loading, setLoading] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<UserFavoriteType[]>([]);

  useEffect(() => {
    if(owner) {
      setLoading(true);
      axios.get('/api/user_favorites', {
        params: {
          owner_email: owner,
        }
      })
      .then(res => setFavorites(res.data.favorites))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
    }
  }, [owner]);

  return { loading, favorites };
};

export default useGetFavorites;
