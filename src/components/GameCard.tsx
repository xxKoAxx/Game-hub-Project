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
import getCropImgURL from '../services/img-url';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <DarkMode>
      <Card backgroundColor='#202020'>
        <Image src={getCropImgURL(game.background_image)} />
        <CardBody paddingTop='10px'>
          <HStack justifyContent={'space-between'}>
            <PlatformIconsList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
          <Heading fontSize={'lg'}>{game.name}</Heading>
        </CardBody>
      </Card>
    </DarkMode>
  );
};

export default GameCard;
