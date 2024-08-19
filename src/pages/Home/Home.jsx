import Logo from '../../components/Logo';
import Button from '../../components/Button';
import NavBar from '../../components/NavBar';

function Home() {
  return (
    <>
      <Logo />
      <div>
        <NavBar />
      </div>
      <Button
        className='bg-emerald text-black font-bold py-2 px-4 rounded hover:bg-blue-700'
        child={'Donate'}
      />

      <div>
        <h1 className='text-white text-3xl'>
          Our four-legged friends need your help.
        </h1>
        <Button
          className='bg-emerald text-black font-bold py-2 px-4 rounded hover:bg-blue-700'
          child={'Adopt a Pet'}
        />
      </div>
    </>
  );
}
export default Home;
