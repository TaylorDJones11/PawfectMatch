import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavbarContainer from '../../components/NavbarContainer';
import AnimalProfile from '../../components/AnimalSingleProfile';

import pic from '../../assets/cat.jpg';
import Footer from '../../components/Footer';

function IndividualAnimal() {
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        const response = await fetch(
          `https://pawfectmatch-1pke.onrender.com/api/animals/${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAnimal(data);
      } catch (error) {
        console.error('Error fetching animal:', error);
      }
    };

    fetchAnimal();
  }, [id]);

  if (!animal) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='bg-beige min-h-screen w-full'>
        <NavbarContainer />

        <AnimalProfile
          title={animal.title}
          photos={animal.photos || pic}
          description={animal.description}
          breed={animal.breed}
          age={animal.age}
          gender={animal.gender}
          weight={animal.weight}
        />
        <Footer />
      </div>
    </>
  );
}
export default IndividualAnimal;
