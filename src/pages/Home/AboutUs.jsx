import NavbarContainer from '../../components/NavbarContainer';
import Footer from '../../components/Footer';
import ProfileGrid from '../../components/ProfileGrid';

function AboutUs() {
  return (
    <>
      <div className='about-container h-screen'>
        <NavbarContainer />

        <h1>Meet Our Rescue Leaders</h1>
        <ProfileGrid />
        <Footer />
      </div>
    </>
  );
}
export default AboutUs;
