import { SimpleGrid } from '@chakra-ui/react';
import useGame from '../hooks/useGame';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

const GameGrid = () => {
  const { data, error, isLoading } = useGame();
  const skeletonNumber = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <p className='danger'>{error}</p>}
      <SimpleGrid
        justifyContent='center'
        justifyItems='center'
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={5}
        padding='15px'
      >
        {isLoading
          ? skeletonNumber.map((number) => (
              <GameCardContainer key={number}>
                <GameCardSkeleton></GameCardSkeleton>
              </GameCardContainer>
            ))
          : data.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
