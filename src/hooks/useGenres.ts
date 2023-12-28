import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface Genres {
  id: number;
  name: string;
  slug: string;
}

interface FetchGenresData {
  count: number;
  results: Genres[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoadingState] = useState(Boolean);

  useEffect(() => {
    const controller = new AbortController();
    setLoadingState(true);

    apiClient
      .get<FetchGenresData>('/genres', { signal: controller.signal })
      .then((res) => {
        setLoadingState(false);
        setGenres(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoadingState(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
