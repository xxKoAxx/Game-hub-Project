import { SimpleGrid, Text } from '@chakra-ui/react';
import { GameDetail } from '../services/gameDetailServices';
import DefinitionItem from './DefinitionItem';
import CriticScore from './GameCard/CriticScore';

interface Props {
  data: GameDetail;
}

const GameAttributes = ({ data }: Props) => {
  return (
    <SimpleGrid columns={2} as='dl' gap={2}>
      <DefinitionItem term='Platforms'>
        {data.platforms.map((platformArr, i) => (
          <Text key={platformArr.platform.name}>
            {data.platforms.length === i + 1
              ? platformArr.platform.name
              : platformArr.platform.name + ' /'}
          </Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term='Metascore'>
        <CriticScore score={data.metacritic}></CriticScore>
      </DefinitionItem>
      <DefinitionItem term='Genres'>
        {data.genres.map((genre, i) => (
          <Text key={genre.id}>
            {data.genres.length === i + 1 ? genre.name : genre.name + ' /'}
          </Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term='Publisher'>
        {data.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
