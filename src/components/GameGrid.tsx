import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard/GameCard';
import GameCardSkeleton from './GameCard/GameCardSkeleton';
import GameCardContainer from './GameCard/GameCardContainer';
import { GameQuery } from '../App';
import useGame from '../hooks/useGame';

interface Props {
  gameQuery: GameQuery;
  displayOption: string;
}

const GameGrid = ({ gameQuery, displayOption }: Props) => {
  const { data, error, isLoading } = useGame(gameQuery);
  const skeletonNumber = [1, 2, 3, 4, 5, 6];

  if (error) return <Text textAlign='center'>{error}</Text>;

  return (
    <SimpleGrid
      justifyItems={displayOption !== 'grid' ? 'center' : ''}
      columns={displayOption === 'grid' ? { sm: 1, md: 2, lg: 3, xl: 4 } : 1}
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
  );
};
export default GameGrid;
