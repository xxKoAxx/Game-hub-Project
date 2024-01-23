import { HStack, Image } from '@chakra-ui/react';

import { Link, useParams } from 'react-router-dom';
import logo from '../assets/logo.webp';
import SearchInput from './SearchInput';
import ColorModeSwitch from './Selector/ColorModeSwitch';

const NavBar = () => {
  const { selectedGameId } = useParams();

  return (
    <HStack
      padding='5px 10px 0 10px'
      position='sticky'
      top='0'
      border='none'
      zIndex={10}
    >
      <Link to='/'>
        <Image src={logo} boxSize='3.5rem' objectFit='cover' />
      </Link>
      <SearchInput />
      {!selectedGameId && <ColorModeSwitch></ColorModeSwitch>}
    </HStack>
  );
};

export default NavBar;
