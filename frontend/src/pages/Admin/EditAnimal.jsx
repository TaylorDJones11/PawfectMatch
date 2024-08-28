import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import Footer from '../../components/Footer';

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
        const response = await fetch(
          `https://pawfectmatch-1pke.onrender.com/api/animals/${id}`
        );
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

      const response = await fetch(
        `https://pawfectmatch-1pke.onrender.com/api/animals/${id}`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData, // Send the FormData object
        }
      );

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
    <div className='bg-beige min-h-screen w-full'>
      <Logo />
      <div className='max-w-md mx-auto mb-8  bg-white p-8 shadow-md rounded'>
        <h2 className='text-2xl text-orange font-bold mb-6'>Edit Animal</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-700'>
              <b>Name</b>
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
              {' '}
              <b>Description</b>{' '}
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
              <b>Update Photo</b>
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
              child={'Save Changes'}
              className='bg-emerald text-black mt-4 px-4 py-2 rounded hover:bg-blue-700 transition duration-300'
            >
              Save Changes
            </Button>
            <Link to='/admin/animals'>
              <Button className='text-gray-700 mt-5 underline' child={'Cancel'}>
                Cancel
              </Button>
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default EditAnimal;
