import NavbarContainer from '../../components/NavbarContainer';
import CardContainer from '../../components/CardContainer';

function AdoptionPage() {
  return (
    <>
      <div className='adoption-container h-screen'>
        <div>
          <NavbarContainer />

          <h1 className='mb-12 text-center text-2xl underline-offset-1 decoration-orange'>
            Adoptable Animals
          </h1>
        </div>

        <div>
          <CardContainer />
        </div>
      </div>
    </>
  );
}
export default AdoptionPage;
