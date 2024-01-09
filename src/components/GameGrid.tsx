import { Box, SimpleGrid, Spinner, Text } from '@chakra-ui/react';

import InfiniteScroll from 'react-infinite-scroll-component';
import { GameQuery } from '../App';
import useGame from '../hooks/useGame';
import GameCard from './GameCard/GameCard';
import GameCardContainer from './GameCard/GameCardContainer';
import GameCardSkeleton from './GameCard/GameCardSkeleton';

interface Props {
  gameQuery: GameQuery;
  displayOption: string;
}

const GameGrid = ({ gameQuery, displayOption }: Props) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGame(gameQuery);
  const skeletonNumber = [1, 2, 3, 4, 5, 6];

  if (error) return <Text textAlign='center'>{error.message}</Text>;

  return (
    <Box padding='15px'>
      <InfiniteScroll
        dataLength={
          data?.pages.reduce((acc, cur) => acc + cur.results.length, 0) || 0
        }
        next={() => fetchNextPage()}
        hasMore={hasNextPage || false}
        loader={<Spinner />}
      >
        <SimpleGrid
          justifyItems='center'
          columns={
            displayOption === 'grid' ? { sm: 1, md: 2, lg: 3, xl: 4 } : 1
          }
          spacing={5}
        >
          {isLoading
            ? skeletonNumber.map((number) => (
                <GameCardContainer key={number}>
                  <GameCardSkeleton></GameCardSkeleton>
                </GameCardContainer>
              ))
            : data?.pages.map((page) =>
                page.results.map((game) => (
                  <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                  </GameCardContainer>
                ))
              )}
        </SimpleGrid>
      </InfiniteScroll>
    </Box>
  );
};
export default GameGrid;
