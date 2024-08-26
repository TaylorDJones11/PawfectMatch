import Logo from './Logo';
import Button from './Button';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

function NavbarContainer() {
  return (
    <>
      <div className='flex items-center justify-between p-4'>
        <Logo />
        <NavBar />
        <div>
          <Link to='/admin/animals'>
            <Button
              className='bg-emerald text-black font-bold py-2 px-4 mr-2 rounded hover:bg-blue-700'
              child={'Admin'}
            />
          </Link>
          <Link to='/volunteer'>
            <Button
              className='bg-emerald text-black font-bold py-2 px-4 rounded hover:bg-blue-700'
              child={'Volunteer'}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
export default NavbarContainer;
