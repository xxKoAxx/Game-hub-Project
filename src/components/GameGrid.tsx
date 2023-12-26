import useGame from '../hooks/useGame';

const GameGrid = () => {
  const { games, error } = useGame();

  return (
    <>
      {error && <text className='danger'>{error}</text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
