import ApiClient from './api-client';

interface TrailersData {
  '480': string;
  max: string;
}

interface Trailers {
  id: number;
  name: string;
  preview: string;
  data: TrailersData;
}

const gameTrailerService = (selectedGameId: number | string | null) => {
  return new ApiClient<Trailers>(`/games/${selectedGameId}/movies`);
};

export default gameTrailerService;
