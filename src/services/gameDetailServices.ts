import ApiClient from './api-client';
import { Genres } from './genresService';
import { Platform } from './platformServices';

interface GameDetailPlatfoms {
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
  parent_platforms: GameDetailPlatfoms[];
  platforms: GameDetailPlatfoms[];
  metacritic: number;
  genres: Genres[];
  publishers: Publishers[];
  playtime: number;
  released: Date;
  updated: Date;
}

const gameDetailServices = (selectedGameId: number | string | null) => {
  return new ApiClient<GameDetail>(`/games/${selectedGameId}`);
};

export default gameDetailServices;
