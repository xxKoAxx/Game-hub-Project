// React library
import React from 'react';
import ReactDOM from 'react-dom/client';
// 3rd party lib
import { ChakraProvider } from '@chakra-ui/react';
// own lib
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
