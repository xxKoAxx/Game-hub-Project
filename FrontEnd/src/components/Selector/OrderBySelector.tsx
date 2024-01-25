import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGameQueryStore from '../../statesStore/gameQueryStore';

const OrderBySelector = () => {
  const orderValue = [
    '',
    '-added',
    'name',
    '-released',
    '-metacritic',
    '-rating',
  ];
  const orderLabel = [
    'Relevance',
    'Date added',
    'Name',
    'Release date',
    'Popularity',
    'Average rating',
  ];
  const setSelectedOrder = useGameQueryStore((s) => s.setSelectedOrder);
  const selectedOrder = useGameQueryStore((s) => s.selectedOrder);

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by:{' '}
          {(selectedOrder && orderLabel[orderValue.indexOf(selectedOrder)]) ||
            'Relevance'}
        </MenuButton>
        <MenuList>
          {orderLabel.map((order, index) => (
            <MenuItem
              key={order}
              onClick={() => {
                setSelectedOrder(orderValue[index]);
              }}
            >
              {order}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default OrderBySelector;
