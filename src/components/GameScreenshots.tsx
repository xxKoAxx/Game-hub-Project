import { Box, Image, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
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

  Fancybox.bind('[data-fancybox="gallery"]');

  if (screenshotError || !screenshots) return null;
  if (screenshotIsLoading) return <Spinner />;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap='0.5rem'>
      {screenshots?.results.map((screenshot, i) => (
        <a href={screenshot.image} data-fancybox='gallery' key={i}>
          <Box position='relative' overflow='hidden' borderRadius='0.5rem'>
            <Image
              hidden={i >= 6}
              filter={i == 5 ? 'blur(5px)' : ''}
              src={getCropImgURL(screenshot.image)}
            ></Image>

            {/* View more overlay */}
            {i === 5 && (
              <Box
                key={'viewAll'}
                position='absolute'
                top='50%'
                left='50%'
                transform='translate(-50%, -50%)'
                textAlign='center'
                color='white'
                zIndex='10'
              >
                <Text>More</Text>
              </Box>
            )}
          </Box>
        </a>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
