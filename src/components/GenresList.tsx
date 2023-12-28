import useGenres from '../hooks/useGenres';

const GenresList = () => {
  const { genres, error, isLoading } = useGenres();

  return (
    <>
      {error && <text>{error}</text>}
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenresList;
