import {
  Card,
  CardBody,
  DarkMode,
  Image,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';
import skeletonImage from '../../assets/skeleton.png';

const GameCardSkeleton = () => {
  return (
    <DarkMode>
      <Card h={'full'}>
        <Skeleton>
          <Image src={skeletonImage} />
        </Skeleton>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Card>
    </DarkMode>
  );
};

export default GameCardSkeleton;
