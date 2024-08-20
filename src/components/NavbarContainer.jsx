import Logo from './Logo';
import Button from './Button';
import NavBar from './NavBar';

function NavbarContainer() {
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
    </>
  );
}
export default NavbarContainer;
