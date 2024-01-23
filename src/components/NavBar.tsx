import { HStack, Image } from '@chakra-ui/react';

import { Link, useParams } from 'react-router-dom';
import logo from '../assets/logo.webp';
import SearchInput from './SearchInput';
import ColorModeSwitch from './Selector/ColorModeSwitch';
import useGameQueryStore from '../statesStore/gameQueryStore';

const NavBar = () => {
  const { selectedGameId } = useParams();
  const setDefaultValue = useGameQueryStore((s) => s.setDefaultValue);
  return (
    <HStack
      padding='5px 10px 0 10px'
      position='sticky'
      top='0'
      border='none'
      zIndex={10}
    >
      <Link to='/' onClick={() => setDefaultValue()}>
        <Image src={logo} boxSize='3.5rem' objectFit='cover' />
      </Link>
      <SearchInput />
      {!selectedGameId && <ColorModeSwitch></ColorModeSwitch>}
    </HStack>
  );
};

export default NavBar;
