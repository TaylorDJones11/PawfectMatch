import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AdoptionPage from './pages/Adoption/AdoptionPage';
import DonationPage from './pages/Donation/DonationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/adopt' element={<AdoptionPage />} />
        <Route path='/donate' element={<DonationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
