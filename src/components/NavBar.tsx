import { HStack, Image, useColorModeValue } from '@chakra-ui/react';

import logo from '../assets/logo.webp';
import ColorModeSwitch from './Selector/ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
  const bg = useColorModeValue('white', 'gray.800');

  return (
    <HStack
      padding='5px 10px 0 10px'
      position='sticky'
      top='0'
      backgroundColor={bg}
      border='none'
      zIndex={10}
    >
      <Image src={logo} boxSize='60px' />
      <SearchInput />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
