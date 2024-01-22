import { HStack, Image, useColorModeValue } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import SearchInput from './SearchInput';
import ColorModeSwitch from './Selector/ColorModeSwitch';

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
      <Link to='/'>
        <Image src={logo} boxSize='3.5rem' objectFit='cover' />
      </Link>
      <SearchInput />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
