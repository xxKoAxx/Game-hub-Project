import { useRef, useState } from 'react';

import {
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

import useGameQueryStore from '../statesStore/gameQueryStore';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
  const searchInput = useRef<HTMLInputElement>(null);
  const setSearchQuery = useGameQueryStore((s) => s.setSearchQuery);
  const navigate = useNavigate();
  const [onInput, setOnInput] = useState(false);
  const bg = useColorModeValue('white', 'gray.800');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        searchInput.current && setSearchQuery(searchInput.current.value);
        navigate('/');
      }}
    >
      <InputGroup>
        <InputLeftElement>
          <BsSearch />
        </InputLeftElement>
        <Input
          ref={searchInput}
          placeholder='Search'
          borderRadius='20px'
          backgroundColor={onInput ? bg : ''}
          _hover={{ backgroundColor: bg }}
          onClick={() => setOnInput(true)}
          onBlur={() => setOnInput(false)}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
