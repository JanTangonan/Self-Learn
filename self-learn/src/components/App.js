import { ChakraProvider } from '@chakra-ui/react'
import Calculator from './Calculator';
import Array from './Array';
import TicTacToe from './TicTacToe';
import WithSubnavigation from './NavBar.tsx';
import SplitScreen from './LandingPage.tsx';
import SimpleThreeColumns from './Features.tsx';
import SmallWithLogoLeft from './Footer.tsx';
import GridBlurredBackdrop from './Testimonials.tsx';
import BasicStatistics from './Statistics.tsx';

function App() {
  return (
    <ChakraProvider>
      <WithSubnavigation />
      <SplitScreen />
      <BasicStatistics />
      <SimpleThreeColumns />
      <GridBlurredBackdrop />
      <SmallWithLogoLeft />
      <TicTacToe />
      <Calculator />
      <Array />
    </ChakraProvider>
  )
}

export default App;