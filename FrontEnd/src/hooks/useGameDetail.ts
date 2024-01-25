import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import gameDetailServices from '../services/gameDetailServices';

const useGameDetail = (selectedGameId: number | string | null) => {
  const gameDetailClient = gameDetailServices(selectedGameId);
  return useQuery({
    queryKey: ['games', selectedGameId],
    queryFn: () => {
      return gameDetailClient.getGameDetail();
    },
    staleTime: ms('1d'), // 24h
  });
};

export default useGameDetail;
