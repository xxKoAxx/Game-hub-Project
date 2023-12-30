import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { Game } from '../../hooks/useGame';
import PlatformIconsList from './PlatformIconsList';
import CriticScore from './CriticScore';
import getCropImgURL from '../../services/img-url';
import Emoji from './Emoji';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const bg = useColorModeValue('#d3d3d3', '#202020');

  return (
    <Card backgroundColor={bg}>
      <Image src={getCropImgURL(game.background_image)} />
      <CardBody paddingTop='10px'>
        <HStack justifyContent={'space-between'} marginBottom={1}>
          <PlatformIconsList
            platforms={
              game.parent_platforms &&
              game.parent_platforms.map((p) => p.platform)
            }
          />
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize={'lg'}>{game.name}</Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
