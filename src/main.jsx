import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, theme } from '@chakra-ui/react'
import App from './App.jsx'
import Color from './Color.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Color />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
