import { HStack, Icon } from '@chakra-ui/react';
import { Platform, iconsMap } from '../../services/platformServices';

interface Props {
  platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: Props) => {
  if (!platforms) return null;
  return (
    <>
      <HStack marginY={2}>
        {platforms.map((platform) => (
          <Icon
            key={platform.slug}
            as={iconsMap[platform.slug]}
            color='gray.500'
          />
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconsList;
