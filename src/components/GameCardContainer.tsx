import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  width?: string;
}

const GameCardContainer = ({ children, width }: Props) => {
  return (
    <Box
      borderRadius='lg'
      overflow='hidden'
      width={width}
      backgroundColor='#202020'
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
