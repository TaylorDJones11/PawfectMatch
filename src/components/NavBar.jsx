import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='gap-6'>
      <Link to='/adopt'>Adoption</Link>
      <Link to='/donate'>Donation</Link>
    </nav>
  );
}
export default NavBar;
