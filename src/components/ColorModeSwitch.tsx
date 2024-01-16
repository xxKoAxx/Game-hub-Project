import { Switch, VStack, useColorMode } from '@chakra-ui/react';
import { MdOutlineLightMode, MdOutlineModeNight } from 'react-icons/md';

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <VStack>
      {colorMode === 'light' ? <MdOutlineLightMode /> : <MdOutlineModeNight />}
      <Switch
        colorScheme='green'
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
      ></Switch>
    </VStack>
  );
};

export default ColorModeSwitch;
