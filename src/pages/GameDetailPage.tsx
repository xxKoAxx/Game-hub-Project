import {
  Button,
  HStack,
  Heading,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import useGameDetail from '../hooks/useGameDetail';
import { useParams } from 'react-router-dom';
import { useRef, useState } from 'react';
import ExpandableText from '../components/ExpandableText';

const GameDetailPage = () => {
  const { selectedGameId } = useParams();
  const { data, error, isLoading } = useGameDetail(selectedGameId || null);
  const descriptionRef = useRef(null);
  const [showState, setShowState] = useState('less');

  if (isLoading) return <Spinner />;
  if (error || !data) return <Text>No Data found</Text>;
  else
    return (
      <>
        <VStack padding='1rem'>
          <Heading>{data.name}</Heading>
          <ExpandableText>{data.description_raw}</ExpandableText>
        </VStack>
      </>
    );
};

export default GameDetailPage;
