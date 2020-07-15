import { useState, useEffect } from 'react';

const BASE_PATH = '/api/search_giphy?search';

interface GiphyData {
  type: string;
  id: string;
  slug: string;
  url: string;
  title: string;
  images: {
    fixed_height: {
      url: string;
    }
  }
}

interface useSearchGiphyResult {
  loading: boolean;
  data: GiphyData[];
}

const useSearchGiphy = (searchPhrase: string): useSearchGiphyResult => {
  const [loading, setLoading ] = useState<boolean>(false);
  const [result, setResults] = useState<any>(undefined);

  const apiPath = `${BASE_PATH}=${searchPhrase}`;

  useEffect(() => {
    if (searchPhrase.length) {
      setLoading(true);
      fetch(apiPath)
        .then(res => res.json())
        .then(res => setResults(res),
          (error) => {
            console.error(error);
        })
        .finally(() => setLoading(false));
    }
  }, [searchPhrase, apiPath]);

  return { loading, data: result && result.data ? result.data : [] };
};


export default useSearchGiphy;

