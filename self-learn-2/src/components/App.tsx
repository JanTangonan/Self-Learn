import LandingPage from './LandingPage';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import TicTacToe from './TicTacToe';
import Calculator from './Calculator';
import Statistics from './Statistics';
import Forms from './Forms';
import DashBoard from './DashBoard';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path="home" element={<LandingPage />} />
        <Route path="tictactoe" element={<TicTacToe />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="forms" element={<Forms />} />
        <Route path="dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  );
}
   
export default App;
