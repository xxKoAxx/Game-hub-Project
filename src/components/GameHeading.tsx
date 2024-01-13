import { Heading } from '@chakra-ui/react';

import useGameQueryStore from '../statesStore/gameQueryStore';

const GameHeading = () => {
  const selectedGenre = useGameQueryStore((s) => s.selectedGenre);
  const selectedPlatform = useGameQueryStore((s) => s.selectedPlatform);

  return (
    <Heading paddingX='15px'>
      {selectedPlatform?.name} {selectedGenre?.name} Games
    </Heading>
  );
};

export default GameHeading;
