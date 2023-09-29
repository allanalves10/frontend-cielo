import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { LoadProvider } from './contexts/LoadContext'
import { TransactionProvider } from './contexts/TransactionContext'
import { Router } from './Router'
import { theme } from './styles/theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <LoadProvider>
          <TransactionProvider>
            <Router />
          </TransactionProvider>
        </LoadProvider>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
