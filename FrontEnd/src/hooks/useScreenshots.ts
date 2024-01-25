import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import screenshotClient from '../services/screenshotServices';

const useScreenshot = (selectedGameId: number | string | null) => {
  const client = screenshotClient(selectedGameId);

  return useQuery({
    queryKey: ['screenshot', selectedGameId],
    queryFn: () => {
      return client.getData();
    },
    staleTime: ms('1d'), // 24h
  });
};

export default useScreenshot;
