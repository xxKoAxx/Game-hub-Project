import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius='lg' overflow='hidden' backgroundColor='#202020'>
      {children}
    </Box>
  );
};

export default GameCardContainer;
