import ApiClient from './api-client';

export interface GameDetail {
  id: number;
  name: string;
  background_image: string;
  description_raw: string;
}

const gameDetailServices = (selectedGameId: number | string | null) => {
  return new ApiClient<GameDetail>(`/games/${selectedGameId}`);
};

export default gameDetailServices;
