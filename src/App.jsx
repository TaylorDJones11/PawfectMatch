import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AdoptionPage from './pages/Adoption/AdoptionPage';
import DonationPage from './pages/Donation/DonationPage';
import AboutUs from './pages/Home/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/adopt' element={<AdoptionPage />} />
        <Route path='/donate' element={<DonationPage />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
