import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let scoreColor = score > 80 ? 'green' : score > 60 ? 'yellow' : 'red';
  return (
    <Badge
      fontSize={'14px'}
      borderRadius={'5px'}
      paddingX={2}
      colorScheme={scoreColor}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
