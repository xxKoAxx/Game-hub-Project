import { Image, SimpleGrid, Spinner } from '@chakra-ui/react';
import useScreenshot from '../hooks/useScreenshots';
import getCropImgURL from '../services/img-url';

interface Props {
  selectedGameId: string | number;
}

const GameScreenshots = ({ selectedGameId }: Props) => {
  const {
    data: screenshots,
    error: screenshotError,
    isLoading: screenshotIsLoading,
  } = useScreenshot(selectedGameId);

  if (screenshotError || !screenshots) return null;
  if (screenshotIsLoading) return <Spinner />;

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap='0.5rem'>
      {screenshots?.results.map((screenshot) => (
        <Image
          key={screenshot.id}
          borderRadius='0.5rem'
          src={getCropImgURL(screenshot.image)}
        ></Image>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
