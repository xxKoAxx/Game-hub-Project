import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  useColorModeValue,
} from '@chakra-ui/react';

import useGenres from '../hooks/useGenres';
import getCropImgURL from '../services/img-url';
import useGameQueryStore from '../statesStore/gameQueryStore';

const GenresList = () => {
  const { data, error, isLoading } = useGenres();
  const textColorMode = useColorModeValue('gray.700', 'whiteAlpha');
  const setSelectedGenre = useGameQueryStore((s) => s.setSelectedGenre);
  const selectedGenre = useGameQueryStore((s) => s.selectedGenre);

  if (error) return null;
  if (isLoading) return <Spinner />;
  if (!data) return null;
  else
    return (
      <>
        <Heading fontSize='2xl' marginY={3}>
          Genres
        </Heading>
        <List>
          {data?.results.map((genre) => (
            <ListItem key={genre.id} paddingY='5px'>
              <HStack>
                <Image
                  src={getCropImgURL(genre.image_background)}
                  boxSize={'32px'}
                  objectFit='cover'
                  borderRadius={8}
                ></Image>
                <Button
                  fontSize='lg'
                  fontWeight={
                    genre.id === selectedGenre?.id ? 'bold' : 'normal'
                  }
                  variant='link'
                  color={textColorMode}
                  whiteSpace='normal'
                  textAlign='left'
                  onClick={() => {
                    selectedGenre?.id === genre.id
                      ? setSelectedGenre(null)
                      : setSelectedGenre(genre);
                  }}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
        </List>
      </>
    );
};

export default GenresList;
