import { useState } from 'react';
import NavbarContainer from '../../components/NavbarContainer';
import Footer from '../../components/Footer';

function Volunteer() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    availability: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send form data to a server
    console.log('Form data submitted:', formData);
  };
  return (
    <>
      <NavbarContainer />

      <div className='container mx-auto p-8 bg-emerald rounded-lg'>
        <h1 className='text-center text-3xl font-bold mb-8'>
          Volunteer with Us
        </h1>
        <form onSubmit={handleSubmit} className='max-w-lg mx-auto'>
          <div className='mb-4'>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor='firstName'
            >
              First Name
            </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded-lg'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor='lastName'
            >
              Last Name
            </label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded-lg'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded-lg'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor='phone'
            >
              Phone
            </label>
            <input
              type='tel'
              id='phone'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded-lg'
              placeholder='(201) 555-0123'
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor='availability'
            >
              Availability
            </label>
            <select
              id='availability'
              name='availability'
              value={formData.availability}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded-lg'
              required
            >
              <option value=''>Select your availability</option>
              <option value='weekdays'>Weekdays</option>
              <option value='weekends'>Weekends</option>
              <option value='both'>Both</option>
            </select>
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor='message'
            >
              Why do you want to volunteer with us?
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded-lg'
              rows='4'
            />
          </div>
          <div className='text-center'>
            <button
              type='submit'
              className='bg-orange text-white font-bold py-2 px-4 rounded hover:bg-emerald-700'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
export default Volunteer;
