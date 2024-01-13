import { ReactNode } from 'react';

import { Box, useColorModeValue } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  const bg = useColorModeValue('#d3d3d3', '#202020');

  return (
    <Box
      borderRadius='xl'
      borderColor={bg}
      borderWidth='1px'
      overflow='hidden'
      maxWidth='700px'
      w={'full'}
      maxHeight={'600px'}
      h={'full'}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
