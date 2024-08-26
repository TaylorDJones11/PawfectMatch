import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AdminAnimalList() {
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
      const response = await fetch(`http://localhost:3002/api/animals/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete');
      }
      setAnimals((prev) => prev.filter((animal) => animal._id !== id));
      alert('Animal deleted successfully');
    } catch (error) {
      console.error('Failed to delete animal', error);
    }
  };

  return (
    <div className='admin-animal-list'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-2xl font-semibold'>Animal List</h2>
        <Link
          to='/admin/animals/new'
          className='bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-700 transition duration-300'
        >
          Add New Animal
        </Link>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {animals.map((animal) => (
          <div key={animal._id} className='bg-white p-4 rounded-lg shadow-md'>
            <h3 className='text-xl font-bold mb-2'>{animal.title}</h3>
            <p className='text-gray-700 mb-4'>{animal.description}</p>
            <div className='flex justify-between'>
              <Link
                to={`/admin/animals/edit/${animal._id}`}
                className='text-blue-500 hover:underline'
              >
                Edit
              </Link>
              <button
                onClick={() => deleteAnimal(animal._id)}
                className='text-red-500 hover:underline'
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
