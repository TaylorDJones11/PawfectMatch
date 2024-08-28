import NavbarContainer from '../../components/NavbarContainer';
import Footer from '../../components/Footer';
import DonationForm from '../../components/DonationForm';

function DonationPage() {
  return (
    <>
      <div className='bg-beige min-h-screen w-full'>
        <NavbarContainer />

        <h1 className='text-center text-2xl mb-16'>
          Give a little, help a lot—support our shelter!
        </h1>
        <DonationForm />
        <Footer />
      </div>
    </>
  );
}
export default DonationPage;
