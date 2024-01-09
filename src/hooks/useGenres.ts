import { useQuery } from '@tanstack/react-query';

import genre from '../data/genre';
import genreClient from '../services/genresService';

// const useGenres = () => useData<Genres>('/genres', {});
// const useGenres = () => ({ data: genre, isLoading: false, error: null });

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: () => genreClient.getData(),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: genre,
  });

export default useGenres;
