import Logo from '../../components/Logo';
import Button from '../../components/Button';

function Home() {
  return (
    <>
      <Logo />
      <Button child={'Login'} />
      <Button child={'Adopt a Pet'} />
      <h1 className='home-header'>Our four-legged friends need your help.</h1>
    </>
  );
}
export default Home;
