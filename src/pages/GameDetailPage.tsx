import {
  Box,
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
import BackGroundImage from '../components/BackGroundImage';

const GameDetailPage = () => {
  const { selectedGameId } = useParams();
  const { data, error, isLoading } = useGameDetail(selectedGameId || null);

  if (isLoading) return <Spinner />;
  if (error || !data) return <Text>No Data found</Text>;
  else
    return (
      <>
        <BackGroundImage imageUrl={data.background_image} />
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
          gap={6}
          paddingX={{ base: '1.5rem', md: '3rem', lg: '5rem' }}
        >
          <GridItem>
            <HStack justifyContent={'center'}>
              <PlatformIconsList
                platforms={data.parent_platforms.map((p) => p.platform)}
              />
              <Text fontSize={'sm'}>
                Average Playtime: {data.playtime} Hours
              </Text>
            </HStack>
            <Heading
              fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
              textAlign={'center'}
            >
              {data.name}
            </Heading>
            <Box paddingY={'2rem'}>
              <Heading fontSize={'lg'} color='white' paddingBottom={'0.5rem'}>
                About
              </Heading>
              <ExpandableText limit={200}>
                {data.description_raw}
              </ExpandableText>
            </Box>
            <GameAttributes data={data} />
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
