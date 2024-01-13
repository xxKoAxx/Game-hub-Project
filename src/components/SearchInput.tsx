import { useRef } from 'react';

import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

import useGameQueryStore from '../statesStore/gameQueryStore';

const SearchInput = () => {
  const searchInput = useRef<HTMLInputElement>(null);
  const setSearchQuery = useGameQueryStore((s) => s.setSearchQuery);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        searchInput.current && setSearchQuery(searchInput.current.value);
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
          variant='filled'
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
