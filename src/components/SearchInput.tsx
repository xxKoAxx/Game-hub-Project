import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement>
        <BsSearch />
      </InputLeftElement>
      <Input placeholder='Search' borderRadius='20px' variant='filled'></Input>
    </InputGroup>
  );
};

export default SearchInput;
