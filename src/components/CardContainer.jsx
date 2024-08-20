import Card from './Card';
import picture from '../assets/cat.jpg';

function CardContainer() {
  return (
    <>
      <div className='p-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <Card
            title='Card 1'
            imageSrc={picture}
            description='Description for card 1.'
            buttonText='Learn More'
            buttonLink='/animalid'
          />
          <Card
            title='Card 2'
            imageSrc={picture}
            description='Description for card 2.'
            buttonText='Learn More'
            buttonLink='/animalid'
          />
          <Card
            title='Card 3'
            imageSrc={picture}
            description='Description for card 3.'
            buttonText='Learn More'
            buttonLink='/animalid'
          />
          <Card
            title='Card 4'
            imageSrc={picture}
            description='Description for card 4.'
            buttonText='Learn More'
            buttonLink='/animalid'
          />
          <Card
            title='Card 5'
            imageSrc={picture}
            description='Description for card 5.'
            buttonText='Learn More'
            buttonLink='/animalid'
          />
          <Card
            title='Card 6'
            imageSrc={picture}
            description='Description for card 6.'
            buttonText='Learn More'
            buttonLink='/animalid'
          />
        </div>
      </div>
    </>
  );
}
export default CardContainer;
