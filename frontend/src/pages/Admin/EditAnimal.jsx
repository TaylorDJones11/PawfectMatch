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
  const [photos, setPhotos] = useState([]); // State for new photos

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

  const handleFileChange = (e) => {
    setPhotos(e.target.files); // Set the selected files
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');

      const formData = new FormData();
      formData.append('title', animal.title);
      formData.append('description', animal.description);
      formData.append('age', animal.age);
      formData.append('gender', animal.gender);
      formData.append('weight', animal.weight);
      formData.append('breed', animal.breed);

      // Append each new photo to the form data
      for (let i = 0; i < photos.length; i++) {
        formData.append('photos', photos[i]);
      }

      const response = await fetch(`http://localhost:3002/api/animals/${id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData, // Send the FormData object
      });

      if (!response.ok) {
        throw new Error('Failed to update animal');
      }

      navigate('/admin/animals');
    } catch (error) {
      console.error('Error updating animal:', error);
      alert(error.message);
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
        <div className='mb-4'>
          <label className='block text-gray-700'>Add More Photos</label>
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
