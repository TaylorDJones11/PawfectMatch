import { useState, useEffect } from 'react';
import Card from './Card';
import picture from '../assets/cat.jpg';

function CardContainer() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await fetch('http://localhost:3002/api/animals');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
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
          {animals.map((animal) => (
            <Card
              key={animal._id}
              title={animal.title}
              imageSrc={picture}
              description={animal.description}
              buttonText='Learn More'
              adoptText='Adopt'
              buttonLink={`/animal/${animal._id}`}
              adoptLink={`/adoptionform`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default CardContainer;
