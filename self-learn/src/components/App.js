import { ChakraProvider } from '@chakra-ui/react'
import Calculator from './Calculator';
import Array from './Array';
import TicTacToe from './TicTacToe';

function App() {
  return (
    <ChakraProvider>
      <TicTacToe />
      <Calculator />
      <Array />
    </ChakraProvider>
  )
}

export default App;