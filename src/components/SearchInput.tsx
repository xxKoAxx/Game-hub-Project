import { useRef } from 'react';

import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

interface Props {
  onSearchSubmit: (searchQuery: string) => void;
}

const SearchInput = ({ onSearchSubmit }: Props) => {
  const searchInput = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        searchInput.current && onSearchSubmit(searchInput.current.value);
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
