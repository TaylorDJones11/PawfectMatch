import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Button from '../../components/Button';

function EditAnimal() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [animal, setAnimal] = useState({
    title: '',
    description: '',
    age: '',
    weight: '',
    breed: '',
  });

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        const response = await fetch(`http://localhost:3002/api/animals/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch animal data');
        }
        const data = await response.json();
        setAnimal(data);
      } catch (error) {
        console.error('Error fetching animal:', error);
      }
    };

    fetchAnimal();
  }, [id]);

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
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:3002/api/animals/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(animal),
      });

      if (!response.ok) {
        throw new Error('Failed to update animal');
      }

      navigate('/admin/animals');
    } catch (error) {
      console.error('Error updating animal:', error);
    }
  };

  return (
    <div className='max-w-md mx-auto bg-white p-8 shadow-md rounded'>
      <h2 className='text-2xl font-bold mb-4'>Edit Animal</h2>
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
            child={'Save Changes'}
            className='bg-emerald text-black px-4 py-2 rounded hover:bg-blue-700 transition duration-300'
          >
            Save Changes
          </Button>
          <Link to='/admin/animals'>
            <Button className='text-gray-700 underline' child={'Cancel'}>
              Cancel
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default EditAnimal;
