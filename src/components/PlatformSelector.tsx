import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatform from '../hooks/usePlatform';
import { Platform } from '../hooks/useGame';

interface Props {
  selectedPlatform?: Platform | null;
  onSelectPlatform: (platform: Platform | null) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { data, error } = usePlatform();
  return (
    <>
      <Menu>
        <MenuButton margin='15px' as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform ? selectedPlatform.name : 'All Platform'}
        </MenuButton>
        <MenuList>
          <MenuItem key='All-platform' onClick={() => onSelectPlatform(null)}>
            All Platform
          </MenuItem>
          {error ? (
            <MenuItem key='platform-error'>No platform found</MenuItem>
          ) : (
            data &&
            data.map((platform) => (
              <MenuItem
                onClick={() => onSelectPlatform(platform)}
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