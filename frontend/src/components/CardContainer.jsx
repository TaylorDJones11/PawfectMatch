import { useState, useEffect } from 'react';
import Card from './Card';
import picture from '../assets/cat.jpg';

function CardContainer() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await fetch(
          'https://pawfectmatch-1pke.onrender.com/api/animals'
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data); // Log the fetched animals
        setAnimals(data);
      } catch (error) {
        console.error('Error fetching animals:', error);
      }
    };

    fetchAnimals();
  }, []);

  return (
    <>
      <div className='p-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {animals.map((animal) => {
            const imageSrc =
              animal.photos.length > 0 ? animal.photos[0] : picture;

            return (
              <Card
                key={animal._id}
                title={animal.title}
                imageSrc={imageSrc}
                description={animal.description}
                buttonText='Learn More'
                adoptText='Adopt'
                buttonLink={`/animal/${animal._id}`}
                adoptLink={`/adoptionform`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CardContainer;
