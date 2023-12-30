import {
  HStack,
  Heading,
  Tab,
  TabList,
  Tabs,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { MdOutlineViewDay, MdGridView } from 'react-icons/md';

interface Props {
  onSelectDisplayOption: (displayOption: string) => void;
}

const DisplayOption = ({ onSelectDisplayOption }: Props) => {
  const bg = useColorModeValue('blackAlpha', 'gray');
  return (
    <>
      <HStack>
        <Heading whiteSpace='nowrap' size='sm'>
          Display options
        </Heading>
        <Tabs
          variant='soft-rounded'
          colorScheme={bg}
          onChange={(index) =>
            onSelectDisplayOption(index === 0 ? 'grid' : 'column')
          }
        >
          <TabList>
            <Tab>
              <MdGridView size={25} />
            </Tab>
            <Tab>
              <MdOutlineViewDay size={25} />
            </Tab>
          </TabList>
        </Tabs>
      </HStack>
    </>
  );
};

export default DisplayOption;
