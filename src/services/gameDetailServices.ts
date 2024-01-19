import ApiClient from './api-client';
import { Genres } from './genresService';
import { Platform } from './platformServices';

interface GameDetailPlatforms {
  platform: Platform;
}

interface Publishers {
  id: number;
  name: string;
}

export interface GameDetail {
  id: number;
  name: string;
  background_image: string;
  description_raw: string;
  platforms: GameDetailPlatforms[];
  metacritic: number;
  genres: Genres[];
  publishers: Publishers[];
}

const gameDetailServices = (selectedGameId: number | string | null) => {
  return new ApiClient<GameDetail>(`/games/${selectedGameId}`);
};

export default gameDetailServices;
