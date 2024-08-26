import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

function NewAnimal() {
  const navigate = useNavigate();
  const [animal, setAnimal] = useState({
    title: '',
    description: '',
    age: '',
    weight: '',
    breed: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnimal((prevAnimal) => ({
      ...prevAnimal,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3002/api/animals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(animal),
      });

      if (!response.ok) {
        throw new Error('Failed to add animal');
      }

      navigate('/admin/animals'); // Redirect to the animal list after successful creation
    } catch (error) {
      console.error('Error adding animal:', error);
    }
  };

  return (
    <div className='max-w-md mx-auto bg-white p-8 shadow-md rounded'>
      <h2 className='text-2xl font-bold mb-4'>Add New Animal</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-700'>Title</label>
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
          <label className='block text-gray-700'>Description</label>
          <textarea
            name='description'
            value={animal.description}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Age</label>
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
          <label className='block text-gray-700'>Weight</label>
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
          <label className='block text-gray-700'>Breed</label>
          <input
            type='text'
            name='breed'
            value={animal.breed}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
            required
          />
        </div>
        <div className='flex justify-between'>
          <Button
            type='submit'
            child={'Add Animal'}
            className='bg-emerald text-black px-4 py-2 rounded hover:bg-blue-700 transition duration-300'
          >
            Add Animal
          </Button>
        </div>
      </form>
      <Link to={'/admin/animals'}>
        <Button className='text-gray-700 underline' child={'Cancel'} />
      </Link>
    </div>
  );
}

export default NewAnimal;
