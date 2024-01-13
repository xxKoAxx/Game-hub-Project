import {
  HStack,
  Heading,
  Show,
  Tab,
  TabList,
  Tabs,
  useColorModeValue,
} from '@chakra-ui/react';
import { MdOutlineViewDay, MdGridView } from 'react-icons/md';
import useDisplayOptionStore from '../statesStore/displayOptionStore';

const DisplayOption = () => {
  const bg = useColorModeValue('blackAlpha', 'gray');
  const setDisplayOption = useDisplayOptionStore((s) => s.setDisplayOption);

  return (
    <>
      <Show above='sm'>
        <HStack>
          <Heading whiteSpace='nowrap' size='md'>
            Display options
          </Heading>
          <Tabs
            variant='soft-rounded'
            colorScheme={bg}
            onChange={(index) =>
              setDisplayOption(index === 0 ? 'grid' : 'column')
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
      </Show>
    </>
  );
};

export default DisplayOption;
