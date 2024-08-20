import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='flex gap-6 text-lg font-bold text-black'>
      <Link
        to='/adopt'
        className='hover:border-b-4 hover:border-orange transition-all duration-300'
      >
        Adoption
      </Link>
      <Link
        to='/donate'
        className='hover:border-b-4 hover:border-orange transition-all duration-300'
      >
        Donation
      </Link>
      <Link
        to='/donate'
        className='hover:border-b-4 hover:border-orange transition-all duration-300'
      >
        About Us
      </Link>
    </nav>
  );
}
export default NavBar;
