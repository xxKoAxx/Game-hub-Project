import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expandState, setExpandState] = useState(false);
  const limit = 300;

  if (children.length <= limit) return <Text>{children}</Text>;

  let description = expandState
    ? children + '.'
    : children.slice(0, limit) + '...';
  return (
    <Text>
      {description} {expandState ? <br /> : ''}
      <Button
        fontSize='bold'
        colorScheme='yellow'
        size='xs'
        onClick={() => setExpandState(!expandState)}
      >
        {expandState ? 'Show less' : 'Read more'}
      </Button>
    </Text>
  );
};

export default ExpandableText;
