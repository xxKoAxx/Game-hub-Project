import { Box, Flex, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box marginTop='1rem'>
      <Heading as='dt' fontSize='md' color='gray' paddingBottom='0.5rem'>
        {term}
      </Heading>
      <Flex as={'dd'} wrap='wrap' gap={2}>
        {children}
      </Flex>
    </Box>
  );
};

export default DefinitionItem;
