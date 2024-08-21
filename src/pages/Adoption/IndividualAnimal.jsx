import NavbarContainer from '../../components/NavbarContainer';
import AnimalProfile from '../../components/AnimalSingleProfile';

import pic from '../../assets/cat.jpg';

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
    </>
  );
}
export default IndividualAnimal;
