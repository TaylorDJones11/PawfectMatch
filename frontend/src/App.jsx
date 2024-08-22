import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AdoptionPage from './pages/Adoption/AdoptionPage';
import DonationPage from './pages/Donation/DonationPage';
import AboutUs from './pages/Home/AboutUs';
import IndividualAnimal from './pages/Adoption/IndividualAnimal';
import Volunteer from './pages/Volunteer/Volunteer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/adopt' element={<AdoptionPage />} />
        <Route path='/donate' element={<DonationPage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/animalid' element={<IndividualAnimal />} />
        <Route path='/volunteer' element={<Volunteer />} />
      </Routes>
    </Router>
  );
}

export default App;
