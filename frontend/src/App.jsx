import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AdoptionPage from './pages/Adoption/AdoptionPage';
import DonationPage from './pages/Donation/DonationPage';
import AboutUs from './pages/Home/AboutUs';
import IndividualAnimal from './pages/Adoption/IndividualAnimal';
import Volunteer from './pages/Volunteer/Volunteer';
import Login from './pages/Login/Login';
import AdminView from './pages/Admin/AdminView';
import EditAnimal from './pages/Admin/EditAnimal';
import NewAnimal from './pages/Admin/NewAnimal';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/adopt' element={<AdoptionPage />} />
        <Route path='/donate' element={<DonationPage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/animal/:id' element={<IndividualAnimal />} />
        <Route path='/volunteer' element={<Volunteer />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/admin/animals'
          element={
            <ProtectedRoute>
              <AdminView />
            </ProtectedRoute>
          }
        />
        <Route
          path='/admin/animals/edit/:id'
          element={
            <ProtectedRoute>
              <EditAnimal />
            </ProtectedRoute>
          }
        />
        <Route
          path='/admin/animals/new'
          element={
            <ProtectedRoute>
              <NewAnimal />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
