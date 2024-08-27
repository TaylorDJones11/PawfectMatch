import AdoptionInquiryForm from '../../components/AdoptionInquiryForm';
import Footer from '../../components/Footer';
import NavbarContainer from '../../components/NavbarContainer';

function AdoptionForm() {
  return (
    <>
      <div className='animal-container f-screen'>
        <NavbarContainer />
        <AdoptionInquiryForm />
        <Footer />
      </div>
    </>
  );
}
export default AdoptionForm;
