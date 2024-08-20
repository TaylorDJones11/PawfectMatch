import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='flex gap-6 text-lg font-bold text-black'>
      <Link to='/adopt'>Adoption</Link>
      <Link to='/donate'>Donation</Link>
      <Link to='/donate'>About Us</Link>
    </nav>
  );
}
export default NavBar;
