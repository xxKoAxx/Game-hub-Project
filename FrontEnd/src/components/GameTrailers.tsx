import { AspectRatio, Spinner } from '@chakra-ui/react';
import useGameTrailer from '../hooks/useTrailers';

interface Props {
  selectedGameId: string | number;
}

const GameTrailers = ({ selectedGameId }: Props) => {
  const {
    data: trailers,
    error: trailerError,
    isLoading: trailerIsLoading,
  } = useGameTrailer(selectedGameId || null);

  let firstVideo = trailers?.results[0];

  if (trailerError || !firstVideo) return null;
  if (trailerIsLoading) return <Spinner></Spinner>;

  return (
    <AspectRatio
      ratio={16 / 9}
      w={'full'}
      borderRadius={'1rem'}
      overflow={'hidden'}
    >
      <video
        poster={firstVideo.preview}
        src={firstVideo.data.max}
        controls
        loop
      ></video>
    </AspectRatio>
  );
};

export default GameTrailers;
