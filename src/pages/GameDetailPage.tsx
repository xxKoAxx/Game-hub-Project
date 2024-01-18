import { Heading, Spinner, Text, VStack } from '@chakra-ui/react';
import useGameDetail from '../hooks/useGameDetail';
import { useParams } from 'react-router-dom';

const GameDetailPage = () => {
  const { selectedGameId } = useParams();
  const { data, error, isLoading } = useGameDetail(selectedGameId || null);

  if (error) return <Text>No Data found</Text>;
  if (isLoading) return <Spinner />;
  if (data)
    return (
      <>
        <VStack padding='1rem'>
          <Heading>{data.name}</Heading>
          <Text>{data.description_raw}</Text>;
        </VStack>
      </>
    );
};

export default GameDetailPage;
