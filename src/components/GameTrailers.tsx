import { AspectRatio, Spinner } from '@chakra-ui/react';
import useGameTrailer from '../hooks/useTrailers';

interface Props {
  selectedGameId: string | number;
}

const GameTrailers = ({ selectedGameId }: Props) => {
  const { data, error, isLoading } = useGameTrailer(selectedGameId || null);
  let firstVideo = data?.results[0];

  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;

  return firstVideo ? (
    <AspectRatio ratio={16 / 9}>
      <video poster={firstVideo.preview} src={firstVideo.data.max} controls />
    </AspectRatio>
  ) : null;
};

export default GameTrailers;
