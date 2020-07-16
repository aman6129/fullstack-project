import { useState, useEffect } from 'react';
import axios from 'axios';

import ImageType from '../types/ImageType';

interface UseSearchGiphyResult {
  loading: boolean;
  data: ImageType[];
}

const useSearchGiphy = (searchPhrase: string): UseSearchGiphyResult => {
  const [loading, setLoading ] = useState<boolean>(false);
  const [result, setResults] = useState<any>(undefined);

  useEffect(() => {
    if (searchPhrase.length) {
      setLoading(true);

      axios.get('/api/search_giphy', {
        params: {
          search: searchPhrase,
        },
      })
      .then(res => setResults(res))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
    }
  }, [searchPhrase]);

  return { loading, data: result?.data?.images ? result.data.images : [] };
};


export default useSearchGiphy;

