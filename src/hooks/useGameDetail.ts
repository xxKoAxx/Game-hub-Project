import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import gameDetailServices from '../services/gameDetailServices';

const useGameDetail = (selectedGameId: number | string | null) =>
  useQuery({
    queryKey: ['games', selectedGameId],
    queryFn: () => {
      const gameDetailClient = gameDetailServices(selectedGameId);
      return gameDetailClient.getGameDetail();
    },
    staleTime: ms('1d'), // 24h
  });

export default useGameDetail;
