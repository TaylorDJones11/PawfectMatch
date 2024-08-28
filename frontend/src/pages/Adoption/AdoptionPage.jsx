import NavbarContainer from '../../components/NavbarContainer';
import CardContainer from '../../components/CardContainer';
import Footer from '../../components/Footer';

function AdoptionPage() {
  return (
    <>
      <div className='bg-beige min-h-screen w-full'>
        <div>
          <NavbarContainer />

          <div className='text-center'>
            <h1 className='mb-12 text-center text-2xl inline-block border-b-2 border-orange'>
              Adoptable Animals
            </h1>
          </div>
        </div>

        <div>
          <CardContainer />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
export default AdoptionPage;
