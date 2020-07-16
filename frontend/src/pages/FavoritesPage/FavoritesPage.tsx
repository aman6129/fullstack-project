import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Box } from '@material-ui/core';

import { useGetFavorites } from '../../api';
import FavoritesList from './components/FavoritesList';

const FavoritesPage: React.FC = () => {
  const { user } = useAuth0();
  const { loading, favorites } = useGetFavorites(user?.email);

  return (
    <Box p={3}>
      <FavoritesList loading={loading} favorites={favorites} />
    </Box>
  );
}

export default FavoritesPage;
