import { useState } from 'react';

import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  onSelectOrder: (ordering: string) => void;
}

const OrderBySelector = ({ onSelectOrder }: Props) => {
  const [selectedOrder, setSelectedOrder] = useState('');
  const orderToSort = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ];

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by: {selectedOrder || 'Relevance'}
        </MenuButton>
        <MenuList>
          {orderToSort.map((order) => (
            <MenuItem
              key={order.value}
              onClick={() => {
                setSelectedOrder(order.label);
                onSelectOrder(order.value);
              }}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default OrderBySelector;
