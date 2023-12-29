import useData from './useData';

export interface Genres {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenres = () => useData<Genres>('/xgenres', {});

export default useGenres;
