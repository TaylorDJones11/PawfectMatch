import pawfectMatch from '../assets/pawfectmatch.png';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className='h-44 w-44 m-0'>
      <Link to='/'>
        {' '}
        <img src={pawfectMatch} alt='Logo' className='w-full h-full' />
      </Link>
    </div>
  );
}
export default Logo;
