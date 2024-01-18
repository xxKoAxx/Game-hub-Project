import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

import PlatformIconsList from './PlatformIconsList';
import CriticScore from './CriticScore';
import getCropImgURL from '../../services/img-url';
import Emoji from './Emoji';
import { Game } from '../../services/gameServices';
import { Link, useNavigate } from 'react-router-dom';
import useGameDetail from '../../hooks/useGameDetail';
import useGameQueryStore from '../../statesStore/gameQueryStore';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const bg = useColorModeValue('#d3d3d3', '#202020');

  return (
    <Card backgroundColor={bg} h='full'>
      <Link to={`/games/${game.slug}`}>
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
      </Link>
    </Card>
  );
};

export default GameCard;
