import { SimpleGrid, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { GameDetail } from '../services/gameDetailServices';
import useGameQueryStore from '../statesStore/gameQueryStore';
import DefinitionItem from './DefinitionItem';
import CriticScore from './GameCard/CriticScore';

interface Props {
  data: GameDetail;
}

const GameAttributes = ({ data }: Props) => {
  const updatedDate = new Date(data.updated);
  const releasedDate = new Date(data.released);
  const setSelectedGenre = useGameQueryStore((s) => s.setSelectedGenre);
  const setSelectedPlatform = useGameQueryStore((s) => s.setSelectedPlatform);
  const setDefaultValue = useGameQueryStore((s) => s.setDefaultValue);

  let platformArr = data.platforms;
  let genreArr = data.genres;

  return (
    <SimpleGrid
      columns={2}
      templateColumns={'1fr 1fr'}
      as='dl'
      columnGap={10}
      rowGap={2}
    >
      <DefinitionItem term='Platforms' contentSide='end'>
        {platformArr.map((platformObject, i) => (
          <Link
            to='/'
            key={platformObject.platform.slug}
            onClick={() => {
              setDefaultValue();
              setSelectedPlatform(platformObject.platform);
            }}
          >
            <Text
              as='u'
              key={platformObject.platform.slug}
              _hover={{ opacity: 0.7 }}
            >
              {platformArr.length === i + 1
                ? platformObject.platform.name
                : platformObject.platform.name + ', '}
            </Text>
          </Link>
        ))}
      </DefinitionItem>
      <DefinitionItem term='Metascore'>
        <CriticScore score={data.metacritic}></CriticScore>
      </DefinitionItem>
      <DefinitionItem term='Genres' contentSide='end'>
        {genreArr.map((genre, i) => (
          <Link
            to='/'
            onClick={() => {
              setDefaultValue();
              setSelectedGenre(genre);
            }}
            key={genre.slug}
          >
            <Text as={'u'} _hover={{ opacity: 0.7 }}>
              {genreArr.length === i + 1 ? genre.name : genre.name + ', '}
            </Text>
          </Link>
        ))}
      </DefinitionItem>
      <DefinitionItem term='Publisher'>
        {data.publishers.map((publisher, i) => (
          <Text key={publisher.name}>
            {data.publishers.length === i + 1
              ? publisher.name
              : publisher.name + ', '}
          </Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term='Released Date' contentSide='end'>
        {releasedDate.toLocaleDateString('hi-IN')}
      </DefinitionItem>
      <DefinitionItem term='Latest Update'>
        {updatedDate.toLocaleDateString('hi-IN')}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
