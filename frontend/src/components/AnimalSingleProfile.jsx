import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';

function AnimalProfile({
  title,
  imageSrc,
  description,
  breed,
  age,
  gender,
  weight,
}) {
  return (
    <div className='flex justify-center mt-12'>
      <div className='bg-white shadow-lg rounded-lg overflow-hidden max-w-md w-full '>
        <img src={imageSrc} alt={title} className='w-full h-52 object-cover' />
        <div className='p-4'>
          <Link to='/adopt'>
            <FontAwesomeIcon
              icon={faArrowLeft}
              className='text-gray-700 mb-6 hover:text-gray-900 transition duration-300'
            />
          </Link>
          <h2 className='text-2xl font-bold mb-2'>{title}</h2>
          <div className='flex gap-4'>
            <p className='text-gray-700 mb-4'>
              <b className='text-orange'>Breed:</b> {breed}
            </p>
            <p className='text-gray-700 mb-4'>
              <b className='text-orange'>Age:</b> {age} year(s)
            </p>
            <p className='text-gray-700 mb-4'>
              <b className='text-orange'>Gender:</b> {gender}
            </p>
            <p className='text-gray-700 mb-4'>
              <b className='text-orange'>Weight:</b> {weight} lbs
            </p>
          </div>
          <p className='text-gray-700 mb-4'>{description}</p>
        </div>
      </div>
    </div>
  );
}
export default AnimalProfile;
