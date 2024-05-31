import LandingPage from './LandingPage';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path="home" element={<LandingPage />} />
      </Routes>
    </div>
  );
}
   
export default App;
