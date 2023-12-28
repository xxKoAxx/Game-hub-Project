import useGenres from '../hooks/useGenres';

const GenresList = () => {
  const { data, error, isLoading } = useGenres();

  return (
    <>
      {error && <text>{error}</text>}
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenresList;
