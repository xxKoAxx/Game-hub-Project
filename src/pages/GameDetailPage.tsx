import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameTrailers from '../components/GameTrailers';
import useGameDetail from '../hooks/useGameDetail';
import GameScreenshots from '../components/GameScreenshots';
import PlatformIconsList from '../components/GameCard/PlatformIconsList';

const GameDetailPage = () => {
  const { selectedGameId } = useParams();
  const { data, error, isLoading } = useGameDetail(selectedGameId || null);

  if (isLoading) return <Spinner />;
  if (error || !data) return <Text>No Data found</Text>;
  else
    return (
      <>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={2}>
          <GridItem>
            <HStack>
              <PlatformIconsList
                platforms={data.parent_platforms.map((p) => p.platform)}
              />
              <Text fontSize={'sm'}>Average Playtime: {data.playtime}</Text>
            </HStack>
            <Heading fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}>
              {data.name}
            </Heading>
            <GameAttributes data={data} />
            <Box paddingY={'2rem'}>
              <Heading fontSize={'xl'}>About</Heading>
              <ExpandableText limit={200}>
                {data.description_raw}
              </ExpandableText>
            </Box>
          </GridItem>
          <GridItem>
            <VStack>
              <GameTrailers selectedGameId={selectedGameId!} />
              <GameScreenshots selectedGameId={selectedGameId!} />
            </VStack>
          </GridItem>
        </SimpleGrid>
      </>
    );
};

export default GameDetailPage;
