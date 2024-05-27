import { Routes, Route, Navigate} from "react-router-dom";
import Calculator from './Calculator';
import Array from './Array';
import TicTacToe from './TicTacToe.tsx';
import WithSubnavigation from './NavBar.tsx';
import SplitScreen from './LandingPage.tsx';
import SimpleThreeColumns from './Features.tsx';
import SmallWithLogoLeft from './Footer.tsx';
import GridBlurredBackdrop from './Testimonials.tsx';
import BasicStatistics from './Statistics.tsx';

function App() {
  return (
    <div className='App'>
      <WithSubnavigation />
      <SplitScreen />
      <BasicStatistics />
      <SimpleThreeColumns />
      <GridBlurredBackdrop />
      <SmallWithLogoLeft />
      {/* <Calculator />
      <Array />
      <Routes>
        <Route path="tictactoe" element={<TicTacToe />} />
      </Routes> */}
    </div>
  )
}

export default App;