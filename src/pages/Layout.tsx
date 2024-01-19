import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Box } from '@chakra-ui/react';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box padding='2rem'>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
