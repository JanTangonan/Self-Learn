import LandingPage from './LandingPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="home" element={<LandingPage />} />
      </Routes>
    </div>
  );
}
   
export default App;
