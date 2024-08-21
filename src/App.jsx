import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import AdoptionPage from './pages/Adoption/AdoptionPage';
import DonationPage from './pages/Donation/DonationPage';
import AboutUs from './pages/Home/AboutUs';
import IndividualAnimal from './pages/Adoption/IndividualAnimal';
import Footer from '../src/components/Footer';

function App() {
  const location = useLocation();

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex-grow'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/adopt' element={<AdoptionPage />} />
          <Route path='/donate' element={<DonationPage />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/animalid' element={<IndividualAnimal />} />
        </Routes>
      </div>

      {location.pathname !== '/' && <Footer />}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
