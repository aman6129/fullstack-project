import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import { useGetFavorites } from '../../api';

const FavoritesPage: React.FC = () => {
  const { user } = useAuth0();
  const { favorites, loading } = useGetFavorites(user?.email);
  console.log(loading, favorites);
  return null;
}

export default FavoritesPage;
