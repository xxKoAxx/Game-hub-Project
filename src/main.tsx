// React library
import React from 'react';
import ReactDOM from 'react-dom/client';
// 3rd party lib
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
// own lib
import App from './App.tsx';
import theme from './Theme.ts';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
