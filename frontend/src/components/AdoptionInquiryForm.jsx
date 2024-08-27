import { useState } from 'react';
import Button from './Button';

function AdoptionInquiryForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    animalName: '',
    livingSituation: '',
    experienceWithPets: '',
    reasonForAdoption: '',
    additionalComments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);

    alert('Your inquiry has been submitted!');
  };

  return (
    <div className='max-w-md mx-auto bg-white p-8 shadow-md rounded'>
      <h2 className='text-2xl font-bold mb-4'>Adoption Inquiry Form</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-700'>First Name</label>
          <input
            type='text'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Last Name</label>
          <input
            type='text'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Email</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Phone</label>
          <input
            type='tel'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Address</label>
          <input
            type='text'
            name='address'
            value={formData.address}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>City</label>
          <input
            type='text'
            name='city'
            value={formData.city}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>State</label>
          <input
            type='text'
            name='state'
            value={formData.state}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>ZIP Code</label>
          <input
            type='text'
            name='zip'
            value={formData.zip}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>
            Animal Name (If Applicable)
          </label>
          <input
            type='text'
            name='animalName'
            value={formData.animalName}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Living Situation</label>
          <select
            name='livingSituation'
            value={formData.livingSituation}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
            required
          >
            <option value=''>Select...</option>
            <option value='House'>House</option>
            <option value='Apartment'>Apartment</option>
            <option value='Condo'>Condo</option>
            <option value='Other'>Other</option>
          </select>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Experience with Pets</label>
          <textarea
            name='experienceWithPets'
            value={formData.experienceWithPets}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Reason for Adoption</label>
          <textarea
            name='reasonForAdoption'
            value={formData.reasonForAdoption}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Additional Comments</label>
          <textarea
            name='additionalComments'
            value={formData.additionalComments}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
          />
        </div>
        <Button
          type='submit'
          className='bg-emerald text-black font-bold py-2 px-4 mt-2 rounded hover:bg-blue-700 transition duration-300'
          child={'Submit Inquiry'}
        />
      </form>
    </div>
  );
}

export default AdoptionInquiryForm;
