import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesData {
  count: number;
  results: Game[];
}

const useGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoadingState] = useState(Boolean);

  useEffect(() => {
    const controller = new AbortController();
    setLoadingState(true);

    apiClient
      .get<FetchGamesData>('/xgames', { signal: controller.signal })
      .then((res) => {
        setLoadingState(false);
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoadingState(false);
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGame;
