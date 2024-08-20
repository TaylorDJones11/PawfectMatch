import Logo from '../../components/Logo';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';

function DonationPage() {
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

      <h1>This is Donations</h1>
    </>
  );
}
export default DonationPage;
