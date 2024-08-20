import Logo from '../../components/Logo';
import Button from '../../components/Button';
import NavBar from '../../components/NavBar';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <>
      <div className='flex items-center justify-between p-4'>
        <Logo />
        <NavBar />
        <Button
          className='bg-emerald text-black font-bold py-2 px-4 rounded hover:bg-blue-700'
          child={'Volunteer'}
        />
      </div>

      <div className='grid grid-cols-1 gap-2 ml-12 mt-64 justify-end'>
        <h1 className='text-black text-6xl tracking-tight '>
          Our four-legged friends <br /> need your help. <br />
        </h1>
        <Link to='/adoption'>
          <Button
            className='bg-emerald text-black font-bold py-2 px-4 mt-2 rounded hover:bg-blue-700'
            child={'Adopt a Pet'}
          />
        </Link>
      </div>
    </>
  );
}
export default Home;
