import { Box, Flex, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
  contentSide?: 'end' | 'start';
}

const DefinitionItem = ({ term, children, contentSide }: Props) => {
  return (
    <Box marginTop='1rem' textAlign={contentSide}>
      <Heading as='dt' fontSize='md' color='gray' paddingBottom='0.5rem'>
        {term}
      </Heading>
      <Flex as={'dd'} wrap='wrap' gap={2} justifyContent={contentSide}>
        {children}
      </Flex>
    </Box>
  );
};

export default DefinitionItem;
