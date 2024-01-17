import {
  Button,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

import usePlatform from '../../hooks/usePlatforms';
import useGameQueryStore from '../../statesStore/gameQueryStore';
import { iconsMap } from '../../services/platformServices';

const PlatformSelector = () => {
  const { data, error } = usePlatform();
  const selectedPlatform = useGameQueryStore((s) => s.selectedPlatform);
  const setSelectedPlatform = useGameQueryStore((s) => s.setSelectedPlatform);

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform ? (
            <HStack>
              <Text>Platform: {selectedPlatform.name}</Text>
              {iconsMap[selectedPlatform.slug] && (
                <Icon
                  key='menuButtonIcon'
                  as={iconsMap[selectedPlatform.slug]}
                  color='gray.500'
                />
              )}
            </HStack>
          ) : (
            'All Platform'
          )}
        </MenuButton>
        <MenuList>
          <MenuItem
            key='All-platform'
            onClick={() => setSelectedPlatform(null)}
          >
            All Platform
          </MenuItem>
          {error ? (
            <MenuItem key='platform-error'>No platform found</MenuItem>
          ) : (
            data &&
            data.results.map((platform) => (
              <MenuItem
                onClick={() => setSelectedPlatform(platform)}
                key={platform.id}
                justifyContent='space-between'
              >
                {platform.name}
                {iconsMap[platform.slug] && (
                  <Icon
                    key={platform.slug}
                    as={iconsMap[platform.slug]}
                    color='gray.500'
                  />
                )}
              </MenuItem>
            ))
          )}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformSelector;
