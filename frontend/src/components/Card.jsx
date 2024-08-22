import { Link } from 'react-router-dom';

function Card({ title, imageSrc, description, buttonText, buttonLink }) {
  return (
    <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
      <img src={imageSrc} alt={title} className='w-full h-48 object-cover' />
      <div className='p-4'>
        <h2 className='text-2xl font-bold mb-2'>{title}</h2>
        <p className='text-gray-700 mb-4'>{description}</p>
        <a
          href={buttonLink}
          className='inline-block px-6 py-2 bg-emerald mr-4  font-bold rounded hover:bg-emerald-600 transition duration-300'
        >
          {buttonText}
        </a>
        <a
          href={buttonLink}
          className='inline-block px-6 py-2 bg-emerald  font-bold rounded hover:bg-emerald-600 transition duration-300'
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}
export default Card;
