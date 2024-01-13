import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';

import './App.css';
import DisplayOption from './components/DisplayOption';
import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import GenresList from './components/GenresList';
import NavBar from './components/NavBar';
import ScrollToTopBtn from './components/ScrollToTopBtn';
import OrderBySelector from './components/Selector/OrderBySelector';
import PlatformSelector from './components/Selector/PlatformSelector';

const App = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: '1fr',
          lg: '240px 1fr',
        }}
      >
        <GridItem area='nav'>
          <NavBar></NavBar>
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside' paddingX='15px'>
            <GenresList />
          </GridItem>
        </Show>
        <GridItem area='main'>
          <GameHeading />
          <HStack margin='15px' justifyContent='space-between' gap={5}>
            <HStack>
              <PlatformSelector />
              <OrderBySelector />
            </HStack>
            <DisplayOption />
          </HStack>
          <GameGrid />
        </GridItem>
      </Grid>
      <ScrollToTopBtn />
    </>
  );
};

export default App;
