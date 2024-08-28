import { useNavigate } from 'react-router-dom';
import AdminAnimalList from '../../components/AdminAnimalList';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import Footer from '../../components/Footer';

function AdminView() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the JWT token from localStorage
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <>
      <div className='bg-beige min-h-screen w-full'>
        <div className='flex justify-between items-center px-8 mb-24'>
          <Logo />
          <h1 className='text-3xl font-bold '>Admin Dashboard</h1>
          <Button
            className='bg-emerald text-black font-bold py-2 px-4 mt-2 rounded'
            child={'Logout'}
            onClick={handleLogout}
          />
        </div>
        <div className='admin-view-container p-8 '>
          <AdminAnimalList />
        </div>
        <Footer />
      </div>
    </>
  );
}
export default AdminView;
