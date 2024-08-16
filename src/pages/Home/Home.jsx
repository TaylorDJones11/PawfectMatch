import Logo from '../../components/Logo';
import Button from '../../components/Button';

function Home() {
  return (
    <>
      <Logo />
      <Button
        className='bg-emerald text-black font-bold py-2 px-4 rounded hover:bg-blue-700'
        child={'Donate'}
      />

      <h1 className='text-white text-3xl'>
        Our four-legged friends need your help.
      </h1>
      <Button
        className='bg-emerald text-black font-bold py-2 px-4 rounded hover:bg-blue-700'
        child={'Adopt a Pet'}
      />
    </>
  );
}
export default Home;
