import { ReactNode } from 'react';

import { Box } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius='xl' overflow='hidden' maxWidth='700px'>
      {children}
    </Box>
  );
};

export default GameCardContainer;
