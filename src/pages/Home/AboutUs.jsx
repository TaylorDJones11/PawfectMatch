import NavbarContainer from '../../components/NavbarContainer';
import Footer from '../../components/Footer';
import ProfileGrid from '../../components/ProfileGrid';

function AboutUs() {
  return (
    <>
      <div className='about-container h-screen'>
        <NavbarContainer />

        <div className='text-center mt-20'>
          <h1 className='font-bold text-xl inline-block border-b-2 border-orange'>
            Meet Our Rescue Leaders
          </h1>
        </div>

        <ProfileGrid />
        <Footer />
      </div>
    </>
  );
}
export default AboutUs;
