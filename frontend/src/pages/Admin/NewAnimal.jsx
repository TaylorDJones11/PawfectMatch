import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import Footer from '../../components/Footer';

function NewAnimal() {
  const navigate = useNavigate();
  const [animal, setAnimal] = useState({
    title: '',
    description: '',
    age: '',
    gender: '',
    weight: '',
    breed: '',
  });
  const [photos, setPhotos] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnimal((prevAnimal) => ({
      ...prevAnimal,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setPhotos(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error('No token found, please log in again.');
      }

      const formData = new FormData();
      formData.append('title', animal.title);
      formData.append('description', animal.description);
      formData.append('age', animal.age);
      formData.append('weight', animal.weight);
      formData.append('breed', animal.breed);
      formData.append('gender', animal.gender);

      // Append each photo to the form data
      for (let i = 0; i < photos.length; i++) {
        formData.append('photos', photos[i]);
      }

      const response = await fetch('http://localhost:3002/api/animals', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData, // Send the FormData object
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Failed to add animal:', errorData);
        throw new Error('Failed to add animal');
      }

      navigate('/admin/animals');
    } catch (error) {
      console.error('Error adding animal:', error);
      alert(error.message);
    }
  };

  return (
    <div className='bg-beige min-h-screen w-full'>
      <Logo />
      <div className='max-w-md mx-auto mb-8 bg-white p-8 shadow-md rounded '>
        <h2 className='text-2xl text-orange font-bold mb-8'>Add New Animal</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-700'>
              {' '}
              <b>Name</b>{' '}
            </label>
            <input
              type='text'
              name='title'
              value={animal.title}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>
              <b>Description</b>
            </label>
            <textarea
              name='description'
              value={animal.description}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>
              <b>Age</b>
            </label>
            <input
              type='text'
              name='age'
              value={animal.age}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>
              <b>Gender</b>
            </label>
            <input
              type='text'
              name='gender'
              value={animal.gender}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>
              <b>Weight</b>
            </label>
            <input
              type='text'
              name='weight'
              value={animal.weight}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>
              <b>Breed</b>
            </label>
            <input
              type='text'
              name='breed'
              value={animal.breed}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>
              <b>Photos</b>
            </label>
            <input
              type='file'
              name='photos'
              multiple
              onChange={handleFileChange}
              className='w-full px-3 py-2 border rounded'
            />
          </div>
          <div className='flex justify-between'>
            <Button
              type='submit'
              child={'Add Animal'}
              className='bg-emerald mt-4 text-black px-4 py-2 rounded hover:bg-blue-700 transition duration-300'
            >
              Add Animal
            </Button>
            <Link to={'/admin/animals'}>
              <Button
                className='text-gray-700 mt-5 underline'
                child={'Cancel'}
              />
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default NewAnimal;
