import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to='/adopt'>Adoption</Link>
      <Link to='/donate'>Donation</Link>
    </nav>
  );
}
export default NavBar;
