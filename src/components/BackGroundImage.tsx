import { Box, Image } from '@chakra-ui/react';

interface Props {
  imageUrl: string;
}

const BackGroundImage = ({ imageUrl }: Props) => {
  return (
    <Box
      position='fixed'
      top='0'
      left='0'
      width='100vw'
      height='100vh'
      overflow='hidden'
      zIndex='-1'
    >
      <Box
        bgGradient='linear(to-b, transparent 0%, black 90%, black 100%)'
        w='100%'
        h='100%'
        position='absolute'
        bottom='0'
        left='0'
        zIndex='1'
      />
      <Image
        src={imageUrl}
        opacity={0.2}
        alt='Blurred Background'
        w='100%'
        h='100%'
        objectFit='cover'
        position='absolute'
        top='0'
        left='0'
      />
    </Box>
  );
};

export default BackGroundImage;
