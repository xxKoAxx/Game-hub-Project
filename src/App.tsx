import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenresList from './components/GenresList';
import { useState } from 'react';
import { Genres } from './hooks/useGenres';

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);

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
            <GenresList
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem area='main'>
          <GameGrid selectedGenre={selectedGenre}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
