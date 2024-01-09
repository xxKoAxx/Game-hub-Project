import { useQuery } from '@tanstack/react-query';

import platform from '../data/platform';
import platformClient from '../services/platformServices';

// const usePlatform = () => useData<Platform>('/platforms/lists/parents');
const usePlatform = () =>
  useQuery({
    queryKey: ['platform'],
    queryFn: () => platformClient.getData(),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: platform,
  });

export default usePlatform;
