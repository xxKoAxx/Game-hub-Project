import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import DisplayOption from '../components/Selector/DisplayOption';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenresList from '../components/GenresList';
import ScrollToTopBtn from '../components/ScrollToTopBtn';
import OrderBySelector from '../components/Selector/OrderBySelector';
import PlatformSelector from '../components/Selector/PlatformSelector';

const HomePage = () => {
  return (
    <>
      <Grid
        templateColumns={{
          base: '1fr',
          lg: '220px 1fr',
        }}
      >
        <Show above='lg'>
          <GridItem paddingX='1.5rem'>
            <GenresList />
          </GridItem>
        </Show>
        <GridItem>
          <GameHeading />
          <HStack margin='1rem' justifyContent='space-between' gap={5}>
            <HStack>
              <PlatformSelector />
              <OrderBySelector />
            </HStack>
            <Show above='md'>
              <DisplayOption />
            </Show>
          </HStack>
          <GameGrid />
        </GridItem>
      </Grid>
      <ScrollToTopBtn />
    </>
  );
};

export default HomePage;
