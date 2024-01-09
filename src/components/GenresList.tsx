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
import { Genres } from '../services/genresService';

interface Props {
  onSelectGenre: (genre: Genres | null) => void;
  selectedGenre?: Genres | null;
}

const GenresList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  const textColorMode = useColorModeValue('gray.700', 'whiteAlpha');
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
                  onClick={() => {
                    selectedGenre?.id === genre.id
                      ? onSelectGenre(null)
                      : onSelectGenre(genre);
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
