import ApiClient from './api-client';

export interface Genres {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

export default new ApiClient<Genres>('genres');
