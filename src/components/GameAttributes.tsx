import { GameDetail } from '../services/gameDetailServices';
import { SimpleGrid, Text } from '@chakra-ui/react';
import DefinitionItem from './DefinitionItem';
import CriticScore from './GameCard/CriticScore';

interface Props {
  data: GameDetail;
}

const GameAttributes = ({ data }: Props) => {
  return (
    <SimpleGrid columns={2} as='dl' gap='1rem'>
      <DefinitionItem term='Platforms'>
        {data.platforms.map((platformArr) => (
          <Text key={platformArr.platform.name}>
            {platformArr.platform.name}
          </Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term='Metascore'>
        <CriticScore score={data.metacritic}></CriticScore>
      </DefinitionItem>
      <DefinitionItem term='Genres'>
        {data.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
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
