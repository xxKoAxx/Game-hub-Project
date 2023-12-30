import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenres, { Genres } from '../hooks/useGenres';
import getCropImgURL from '../services/img-url';

interface Props {
  onSelectGenre: (genre: Genres | null) => void;
  selectedGenre?: Genres | null;
}

const GenresList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  // if (error) return null;
  // if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
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
                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                variant='link'
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
