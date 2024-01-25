import { useEffect, useState } from 'react';

import { IoIosArrowUp } from 'react-icons/io';
import { Box, Button } from '@chakra-ui/react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Box
          onClick={scrollToTop}
          position='fixed'
          bottom='20px'
          right={['16px', '10px']}
          zIndex={3}
        >
          <Button
            size={'md'}
            variant='solid'
            bgColor='gray'
            borderRadius={'20px'}
          >
            <IoIosArrowUp />
          </Button>
        </Box>
      )}
    </>
  );
}
