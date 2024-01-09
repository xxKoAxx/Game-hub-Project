import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { GameQuery } from '../App';
import gameClient, { Game } from '../services/gameServices';
import { FetchData } from '../services/api-client';
import ms from 'ms';

const useGame = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchData<Game>, Error>({
    queryKey: [
      'games',
      {
        genre: gameQuery.selectedGenre?.name,
        platform: gameQuery.selectedPlatform?.name,
        ordering: gameQuery.selectedOrder,
        searchQuery: gameQuery.searchQuery,
      },
    ],
    queryFn: ({ pageParam = 1 }) =>
      gameClient.getData({
        params: {
          genres: gameQuery.selectedGenre?.id,
          parent_platforms: gameQuery.selectedPlatform?.id,
          ordering: gameQuery.selectedOrder,
          search: gameQuery.searchQuery,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : null,
    staleTime: ms('1d'), //24h
  });

export default useGame;
