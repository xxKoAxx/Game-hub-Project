import {
  Card,
  CardBody,
  DarkMode,
  Image,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';

const GameCardSkeleton = () => {
  return (
    <DarkMode>
      <Card>
        <Skeleton height='200px'>
          <Image width='600px' />
        </Skeleton>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Card>
    </DarkMode>
  );
};

export default GameCardSkeleton;
