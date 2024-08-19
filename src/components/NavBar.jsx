import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='flex gap-4'>
      <Link to='/adopt'>Adoption</Link>
      <Link to='/donate'>Donation</Link>
    </nav>
  );
}
export default NavBar;
