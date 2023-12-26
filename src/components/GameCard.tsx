import { Card, CardBody, DarkMode, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGame';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <DarkMode>
      <Card borderRadius={'lg'} overflow={'hidden'} minHeight={'300px'}>
        <Image src={game.background_image} maxHeight={'60%'} />
        <CardBody>
          <Heading fontSize={'2xl'}>{game.name}</Heading>
        </CardBody>
      </Card>
    </DarkMode>
  );
};

export default GameCard;
