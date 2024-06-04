import LandingPage from './LandingPage';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import TicTacToe from './TicTacToe';
import Calculator from './Calculator';
import Statistics from './Statistics';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <LandingPage />
      <Statistics />
      <Routes>
        <Route path="home" element={<LandingPage />} />
        <Route path="tictactoe" element={<TicTacToe />} />
        <Route path="calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
}
   
export default App;
