import ms from 'ms';
import { useQuery } from '@tanstack/react-query';
import gameTrailerService from '../services/trailerServices';

const useGameTrailer = (selectedGameId: number | string | null) =>
  useQuery({
    queryKey: ['games', 'trailers', selectedGameId],
    queryFn: () => {
      const gameTrailerClient = gameTrailerService(selectedGameId);
      return gameTrailerClient.getData();
    },
    staleTime: ms('1d'), // 24h
  });

export default useGameTrailer;
