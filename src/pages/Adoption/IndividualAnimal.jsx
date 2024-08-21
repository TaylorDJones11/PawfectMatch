import NavbarContainer from '../../components/NavbarContainer';
import AnimalProfile from '../../components/AnimalSingleProfile';

import pic from '../../assets/cat.jpg';
import Footer from '../../components/Footer';

function IndividualAnimal() {
  return (
    <>
      <NavbarContainer />

      <AnimalProfile
        title='Cosmo'
        imageSrc={pic}
        description='Here is the description'
        breed='Tabby'
        age='4'
        gender='M'
        weight='12lbs'
      />
      <Footer />
    </>
  );
}
export default IndividualAnimal;
