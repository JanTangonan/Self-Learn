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
      <Routes>
        <Route path="home" element={<SplitScreen />} />
        <Route path="basicstatistics" element={<BasicStatistics />} />
        <Route path="simplethreecolumns" element={<SimpleThreeColumns />} />
        <Route path="gridblurredbackdrop" element={<GridBlurredBackdrop />} />
        <Route path="smallwithlogoleft" element={<SmallWithLogoLeft />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="array" element={<Array />} />
        <Route path="tictactoe" element={<TicTacToe />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      {/* <SplitScreen />
      <BasicStatistics />
      <SimpleThreeColumns />
      <GridBlurredBackdrop />
      <SmallWithLogoLeft /> */}
      {/* <Calculator />
      <Array />
      <Routes>
        <Route path="tictactoe" element={<TicTacToe />} />
      </Routes> */}
    </div>
  )
}

export default App;