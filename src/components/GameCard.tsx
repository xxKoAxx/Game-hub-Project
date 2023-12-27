import {
  Card,
  CardBody,
  DarkMode,
  HStack,
  Heading,
  Image,
} from '@chakra-ui/react';
import { Game } from '../hooks/useGame';
import PlatformIconsList from './PlatformIconsList';
import CriticScore from './CriticScore';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <DarkMode>
      <Card
        borderRadius={'lg'}
        overflow={'hidden'}
        minHeight={'300px'}
        backgroundColor={'gray.800'}
      >
        <Image src={game.background_image} maxHeight={'60%'} />
        <CardBody>
          <Heading fontSize={'2xl'}>{game.name}</Heading>
          <HStack justifyContent={'space-between'}>
            <PlatformIconsList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
        </CardBody>
      </Card>
    </DarkMode>
  );
};

export default GameCard;
