import { SimpleGrid, Text } from '@chakra-ui/react';
import { GameDetail } from '../services/gameDetailServices';
import DefinitionItem from './DefinitionItem';
import CriticScore from './GameCard/CriticScore';

interface Props {
  data: GameDetail;
}

const GameAttributes = ({ data }: Props) => {
  const updatedDate = new Date(data.updated);
  const releasedDate = new Date(data.released);

  return (
    <SimpleGrid columns={2} templateColumns={'1.6fr 1fr'} as='dl' gap={2}>
      <DefinitionItem term='Platforms'>
        {data.platforms.map((platformArr, i) => (
          <Text as='u' key={platformArr.platform.slug}>
            {data.platforms.length === i + 1
              ? platformArr.platform.name
              : platformArr.platform.name + ', '}
          </Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term='Metascore'>
        <CriticScore score={data.metacritic}></CriticScore>
      </DefinitionItem>
      <DefinitionItem term='Genres'>
        {data.genres.map((genre, i) => (
          <Text as='u' key={genre.slug}>
            {data.genres.length === i + 1 ? genre.name : genre.name + ', '}
          </Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term='Publisher'>
        {data.publishers.map((publisher, i) => (
          <Text as='u' key={publisher.name}>
            {data.publishers.length === i + 1
              ? publisher.name
              : publisher.name + ', '}
          </Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term='Released Date'>
        {releasedDate.toLocaleDateString('hi-IN')}
      </DefinitionItem>
      <DefinitionItem term='Latest Update'>
        {updatedDate.toLocaleDateString('hi-IN')}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
