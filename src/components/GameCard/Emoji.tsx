import { Image, ImageProps } from '@chakra-ui/react';

import bullsEye from '../../assets/bulls-eye.webp';
import meh from '../../assets/meh.webp';
import thumbsUp from '../../assets/thumbs-up.webp';

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return;
  const ratingMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh', boxSize: '20px', marginTop: '1' },
    4: { src: thumbsUp, alt: 'recommended', boxSize: '20px', marginTop: '1' },
    5: { src: bullsEye, alt: 'exceptional', boxSize: '25px' },
  };

  return <Image {...ratingMap[rating]} />;
};

export default Emoji;
