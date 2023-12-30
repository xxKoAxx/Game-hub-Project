import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

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
