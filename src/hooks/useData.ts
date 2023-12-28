import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface FetchData<T> {
  count: number;
  results: T[];
}

const useData = <T>(endPoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoadingState] = useState(Boolean);

  useEffect(() => {
    const controller = new AbortController();
    setLoadingState(true);

    apiClient
      .get<FetchData<T>>(endPoint, { signal: controller.signal })
      .then((res) => {
        setLoadingState(false);
        setData(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoadingState(false);
      });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};

export default useData;
