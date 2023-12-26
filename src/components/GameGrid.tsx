import { SimpleGrid } from '@chakra-ui/react';
import useGame from '../hooks/useGame';
import GameCard from './GameCard';

const GameGrid = () => {
  const { games, error } = useGame();

  return (
    <>
      {error && <text className='danger'>{error}</text>}
      <SimpleGrid
        justifyContent='center'
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacingX={5}
        spacingY={10}
        padding='15px'
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
