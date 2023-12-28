import {
  Card,
  CardBody,
  DarkMode,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';

const GameCardSkeleton = () => {
  return (
    <DarkMode>
      <Card>
        <Skeleton height='60%'></Skeleton>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Card>
    </DarkMode>
  );
};

export default GameCardSkeleton;