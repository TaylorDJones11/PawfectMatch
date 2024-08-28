import AdoptionInquiryForm from '../../components/AdoptionInquiryForm';
import Footer from '../../components/Footer';
import NavbarContainer from '../../components/NavbarContainer';

function AdoptionForm() {
  return (
    <>
      <div className='bg-beige min-h-screen w-full'>
        <NavbarContainer />
        <AdoptionInquiryForm />
        <Footer />
      </div>
    </>
  );
}
export default AdoptionForm;
