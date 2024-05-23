import { ChakraProvider } from '@chakra-ui/react'
import Calculator from './Calculator';
import Array from './Array';
import TicTacToe from './TicTacToe';
import WithSubnavigation from './NavBar.tsx';
import SplitScreen from './LandingPage.tsx';
import SimpleThreeColumns from './Features.tsx';

function App() {
  return (
    <ChakraProvider>
      <WithSubnavigation />
      <SplitScreen />
      <SimpleThreeColumns />
      <TicTacToe />
      <Calculator />
      <Array />
    </ChakraProvider>
  )
}

export default App;