import { Heading, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameTrailers from '../components/GameTrailers';
import useGameDetail from '../hooks/useGameDetail';
const GameDetailPage = () => {
  const { selectedGameId } = useParams();
  const { data, error, isLoading } = useGameDetail(selectedGameId || null);

  if (isLoading) return <Spinner />;
  if (error || !data) return <Text>No Data found</Text>;
  else
    return (
      <>
        <Heading>{data.name}</Heading>
        <ExpandableText limit={200}>{data.description_raw}</ExpandableText>
        <GameAttributes data={data} />
        <GameTrailers selectedGameId={selectedGameId!} />
      </>
    );
};

export default GameDetailPage;
