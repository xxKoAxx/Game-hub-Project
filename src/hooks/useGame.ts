import { GameQuery } from '../App';
import useData from './useData';
import { Platform } from './usePlatform';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGame = (gameQuery: GameQuery) =>
  useData<Game>(
    '/games',
    {
      params: {
        genres: gameQuery.selectedGenre?.id,
        platforms: gameQuery.selectedPlatform?.id,
        ordering: gameQuery?.selectedOrder,
      },
    },
    [gameQuery]
  );

export default useGame;
