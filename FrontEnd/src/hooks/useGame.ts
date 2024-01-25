import { useInfiniteQuery } from '@tanstack/react-query';

import ms from 'ms';
import { FetchData } from '../services/api-client';
import gameClient, { Game } from '../services/gameServices';
import useGameQueryStore from '../statesStore/gameQueryStore';

const useGame = () => {
  const selectedGenre = useGameQueryStore((s) => s.selectedGenre);
  const selectedPlatform = useGameQueryStore((s) => s.selectedPlatform);
  const selectedOrder = useGameQueryStore((s) => s.selectedOrder);
  const searchQuery = useGameQueryStore((s) => s.searchQuery);

  return useInfiniteQuery<FetchData<Game>, Error>({
    queryKey: [
      'games',
      {
        genre: selectedGenre?.name,
        platform: selectedPlatform?.name,
        ordering: selectedOrder,
        searchQuery: searchQuery,
      },
    ],
    queryFn: ({ pageParam = 1 }) =>
      gameClient.getData({
        params: {
          genres: selectedGenre?.id,
          parent_platforms: selectedPlatform?.id,
          ordering: selectedOrder,
          search: searchQuery,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : null,
    staleTime: ms('1d'), //24h
  });
};
export default useGame;
