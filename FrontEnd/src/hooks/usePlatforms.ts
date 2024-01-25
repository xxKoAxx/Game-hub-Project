import { useQuery } from '@tanstack/react-query';

import platform from '../data/platform';
import platformClient from '../services/platformServices';
import ms from 'ms';

// const usePlatform = () => useData<Platform>('/platforms/lists/parents');
const usePlatform = () =>
  useQuery({
    queryKey: ['platform'],
    queryFn: () => platformClient.getData(),
    staleTime: ms('1d'), //24h
    initialData: platform,
  });

export default usePlatform;
