import { Routes, Route, Navigate} from "react-router-dom";
import Calculator from './Calculator';
import Array from './Array';
import TicTacToe from './TicTacToe';
import WithSubnavigation from './NavBar';
import SplitScreen from './LandingPage';
import SimpleThreeColumns from './Features';
import SmallWithLogoLeft from './Footer';
import GridBlurredBackdrop from './Testimonials';
import BasicStatistics from './Statistics';
import React from "react";

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