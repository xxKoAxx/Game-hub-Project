import { useState } from 'react';
import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenresList from './components/GenresList';
import { Genres } from './hooks/useGenres';
import PlatformSelector from './components/Selector/PlatformSelector';
import OrderBySelector from './components/Selector/OrderBySelector';
import { Platform } from './hooks/usePlatform';
import './App.css';
import GameHeading from './components/GameHeading';
import DisplayOption from './components/DisplayOption';
import ScrollToTopBtn from './components/ScrollToTopBtn';

export interface GameQuery {
  // use for simplify states variable declairation
  selectedGenre: Genres | null;
  selectedPlatform: Platform | null;
  selectedOrder: string | null;
  searchQuery: string | null;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [displayOption, setDisplayOption] = useState('grid');

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
          <NavBar
            onSearchSubmit={(searchQuery) => {
              setGameQuery({ ...gameQuery, searchQuery });
            }}
          ></NavBar>
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside' paddingX='15px'>
            <GenresList
              selectedGenre={gameQuery.selectedGenre}
              onSelectGenre={(selectedGenre) =>
                setGameQuery({ ...gameQuery, selectedGenre })
              }
            />
          </GridItem>
        </Show>
        <GridItem area='main'>
          <GameHeading gameQuery={gameQuery} />
          <HStack margin='15px' justifyContent='space-between' gap={5}>
            <HStack>
              <PlatformSelector
                selectedPlatform={gameQuery.selectedPlatform}
                onSelectPlatform={(selectedPlatform) =>
                  setGameQuery({ ...gameQuery, selectedPlatform })
                }
              />
              <OrderBySelector
                onSelectOrder={(ordering) =>
                  setGameQuery({ ...gameQuery, selectedOrder: ordering })
                }
              />
            </HStack>
            <DisplayOption
              onSelectDisplayOption={(displayOption) =>
                setDisplayOption(displayOption)
              }
            />
          </HStack>
          <GameGrid
            gameQuery={gameQuery}
            displayOption={displayOption}
          ></GameGrid>
        </GridItem>
      </Grid>
      <ScrollToTopBtn />
    </>
  );
};

export default App;
