import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AdminAnimalList() {
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
        setAnimals(data);
      } catch (error) {
        console.error('Failed to fetch animals', error);
      }
    };

    fetchAnimals();
  }, []);

  const deleteAnimal = async (id) => {
    if (!window.confirm('Are you sure you want to delete this animal?')) {
      return;
    }

    try {
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error('No token found, please log in again.');
      }

      const response = await fetch(
        `https://pawfectmatch-1pke.onrender.com/api/animals/${id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Failed to delete animal:', errorData);
        throw new Error('Failed to delete');
      }

      setAnimals((prev) => prev.filter((animal) => animal._id !== id));
      alert('Animal deleted successfully');
    } catch (error) {
      console.error('Failed to delete animal', error);
      alert('Error: ' + error.message);
    }
  };

  return (
    <div className='admin-animal-list'>
      <div className='flex justify-between items-center mb-6'>
        <Link
          to='/admin/animals/new'
          className='bg-orange text-black font-bold px-4 py-2 rounded transition duration-300'
        >
          Add New Animal
        </Link>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {animals.map((animal) => (
          <div key={animal._id} className='bg-white p-4 rounded-lg shadow-md'>
            {/* Display the first image from the photos array if available */}
            {animal.photos && animal.photos.length > 0 ? (
              <img
                src={animal.photos[0]} // Display the first photo
                alt={animal.title}
                className='w-full h-40 object-contain mb-4 rounded'
              />
            ) : (
              <div className='w-full h-40 bg-gray-200 mb-4 rounded flex items-center justify-center'>
                <span className='text-gray-500'>No Image Available</span>
              </div>
            )}
            <h3 className='text-xl font-bold mb-2'>{animal.title}</h3>
            <p className='text-gray-700 mb-4'>{animal.description}</p>
            <p className='text-gray-700 mb-4'>
              <b>Breed:</b> {animal.breed}
            </p>
            <p className='text-gray-700 mb-4'>
              <b>Weight:</b> {animal.weight} lbs
            </p>
            <p className='text-gray-700 mb-4'>
              <b>Age:</b> {animal.age} year(s)
            </p>
            <p className='text-gray-700 mb-4'>
              <b>Gender:</b> {animal.gender}
            </p>
            <div className='flex justify-between'>
              <Link
                to={`/admin/animals/edit/${animal._id}`}
                className='bg-emerald px-4 py-2 rounded text-black hover:underline'
              >
                Edit
              </Link>
              <button
                onClick={() => deleteAnimal(animal._id)}
                className='bg-red px-4 py-2 rounded text-black hover:underline'
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminAnimalList;
