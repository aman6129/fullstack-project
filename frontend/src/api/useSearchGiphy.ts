import { useState, useEffect } from 'react';
import axios from 'axios';

import GiphyDataType from '../types/GiphyDataType';

interface useSearchGiphyResult {
  loading: boolean;
  data: GiphyDataType[];
}

const useSearchGiphy = (searchPhrase: string): useSearchGiphyResult => {
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

  return { loading, data: result && result.data ? result.data.data : [] };
};


export default useSearchGiphy;

