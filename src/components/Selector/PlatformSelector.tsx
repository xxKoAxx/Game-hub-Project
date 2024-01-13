import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

import usePlatform from '../../hooks/usePlatforms';
import useGameQueryStore from '../../statesStore/gameQueryStore';

const PlatformSelector = () => {
  const { data, error } = usePlatform();
  const selectedPlatform = useGameQueryStore((s) => s.selectedPlatform);
  const setSelectedPlatform = useGameQueryStore((s) => s.setSelectedPlatform);

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform ? selectedPlatform.name : 'All Platform'}
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
              >
                {platform.name}
              </MenuItem>
            ))
          )}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformSelector;
