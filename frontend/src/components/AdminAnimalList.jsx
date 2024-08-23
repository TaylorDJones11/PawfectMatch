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

  function deleteAnimal(id) {
    fetch(`http://localhost:3002/api/animals/${id}`, { method: 'DELETE' })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete');
        }
        return response.json();
      })
      .then(() => {
        console.log('Deleted successfully');
        setAnimals((prev) => prev.filter((animal) => animal._id !== id)); // Update state to reflect deletion
      })
      .catch((error) => console.error('Failed to delete animal', error));
  }

  return (
    <div>
      <h1>Animal List</h1>
      {animals.map((animal) => (
        <div key={animal._id}>
          <h3>{animal.title}</h3>
          <p>{animal.description}</p>
          <Link to={`/admin/animals/edit/${animal._id}`}>Edit</Link>
          <button onClick={() => deleteAnimal(animal._id)}>Delete</button>
        </div>
      ))}
      <Link to='/admin/animals/new'>Add New Animal</Link>
    </div>
  );
}

export default AdminAnimalList;
