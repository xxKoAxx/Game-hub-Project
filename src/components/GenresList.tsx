import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCropImgURL from '../services/img-url';

const GenresList = () => {
  const { data, error, isLoading } = useGenres();

  return (
    <>
      {error && <text>{error}</text>}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image
                src={getCropImgURL(genre.image_background)}
                boxSize={'32px'}
                borderRadius={8}
              ></Image>
              <Text fontSize='lg'>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
