import ApiClient from './api-client';

interface Screenshot {
  id: number;
  image: string;
  width: number;
  height: number;
}

const screenshotClient = (selectedGameId: number | string | null) => {
  return new ApiClient<Screenshot>(`/games/${selectedGameId}/screenshots`);
};

export default screenshotClient;
