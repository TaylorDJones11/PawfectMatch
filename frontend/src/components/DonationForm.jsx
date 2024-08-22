import { useState } from 'react';
import Button from './Button';

function DonationForm() {
  const [giftAmount, setGiftAmount] = useState('');
  const [dedication, setDedication] = useState('');
  const [organization, setOrganization] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('United States');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('credit_card');
  const [optIn, setOptIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log({
      giftAmount,
      dedication,
      organization,
      firstName,
      lastName,
      email,
      phone,
      country,
      address,
      city,
      state,
      zip,
      anonymous,
      paymentMethod,
      optIn,
    });
  };

  return (
    <div className='max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg'>
      <h1
        className='text-2xl font-bold mb-6 
      '
      >
        Donation Form
      </h1>

      <form onSubmit={handleSubmit}>
        {/* Gift Amount */}
        <fieldset className='mb-6'>
          <legend className='text-lg font-semibold mb-2'>Gift Amount</legend>
          <div className='flex flex-wrap gap-4'>
            {['50', '100', '250', '500'].map((amount) => (
              <label key={amount} className='flex items-center'>
                <input
                  type='radio'
                  name='gift_amount'
                  value={amount}
                  checked={giftAmount === amount}
                  onChange={(e) => setGiftAmount(e.target.value)}
                  className='mr-2'
                />
                ${amount}
              </label>
            ))}
            <label className='flex items-center'>
              <input
                type='radio'
                name='gift_amount'
                value='other'
                checked={giftAmount === 'other'}
                onChange={(e) => setGiftAmount(e.target.value)}
                className='mr-2'
              />
              Other amount
              <input
                type='number'
                placeholder='Enter amount'
                value={giftAmount === 'other' ? '' : giftAmount}
                onChange={(e) => setGiftAmount(e.target.value)}
                className='ml-2 border p-1 rounded'
              />
            </label>
          </div>
          <div className='flex gap-4 mt-2'>
            <label className='flex items-center'>
              <input
                type='radio'
                name='donation_type'
                value='one_time'
                checked={giftAmount === 'one_time'}
                onChange={() => setGiftAmount('one_time')}
                className='mr-2'
              />
              One-time donation
            </label>
            <label className='flex items-center'>
              <input
                type='radio'
                name='donation_type'
                value='recurring'
                checked={giftAmount === 'recurring'}
                onChange={() => setGiftAmount('recurring')}
                className='mr-2'
              />
              Recurring donation
            </label>
          </div>
        </fieldset>

        {/* Dedication */}
        <div className='mb-6'>
          <label className='block text-lg font-semibold mb-2'>
            I would like to dedicate this gift:
          </label>
          <input
            type='text'
            value={dedication}
            onChange={(e) => setDedication(e.target.value)}
            placeholder='Enter dedication (optional)'
            className='border p-2 rounded w-full'
          />
        </div>

        {/* Your Information */}
        <fieldset className='mb-6'>
          <legend className='text-lg font-semibold mb-2'>
            Your Information
          </legend>
          <label className='block mb-2'>
            <input
              type='checkbox'
              checked={organization}
              onChange={() => setOrganization(!organization)}
              className='mr-2'
            />
            I would like to give on behalf of an organization
          </label>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
            <div>
              <label className='block mb-2'>First name</label>
              <input
                type='text'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className='border p-2 rounded w-full'
              />
            </div>
            <div>
              <label className='block mb-2'>Last name</label>
              <input
                type='text'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className='border p-2 rounded w-full'
              />
            </div>
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Email</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='border p-2 rounded w-full'
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Phone (optional)</label>
            <input
              type='text'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder='Example: (201) 555-0123'
              className='border p-2 rounded w-full'
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Country</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className='border p-2 rounded w-full'
            >
              <option>United States</option>
              {/* Add more countries as needed */}
            </select>
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Address</label>
            <input
              type='text'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className='border p-2 rounded w-full'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
            <div>
              <label className='block mb-2'>City</label>
              <input
                type='text'
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className='border p-2 rounded w-full'
              />
            </div>
            <div>
              <label className='block mb-2'>State</label>
              <input
                type='text'
                value={state}
                onChange={(e) => setState(e.target.value)}
                className='border p-2 rounded w-full'
              />
            </div>
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>ZIP code</label>
            <input
              type='text'
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              className='border p-2 rounded w-full'
            />
          </div>
          <label className='block mb-4'>
            <input
              type='checkbox'
              checked={anonymous}
              onChange={() => setAnonymous(!anonymous)}
              className='mr-2'
            />
            I/We would like the gift to remain anonymous
          </label>
        </fieldset>

        {/* Payment */}
        <fieldset className='mb-6'>
          <legend className='text-lg font-semibold mb-2'>Payment</legend>
          <div className='flex gap-4 mb-4'>
            <label className='flex items-center'>
              <input
                type='radio'
                name='payment_method'
                value='credit_card'
                checked={paymentMethod === 'credit_card'}
                onChange={() => setPaymentMethod('credit_card')}
                className='mr-2'
              />
              Use a credit card or wallet
            </label>
            <label className='flex items-center'>
              <input
                type='radio'
                name='payment_method'
                value='bank_account'
                checked={paymentMethod === 'bank_account'}
                onChange={() => setPaymentMethod('bank_account')}
                className='mr-2'
              />
              Use a bank account (direct debit)
            </label>
          </div>
          <button
            type='submit'
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
          >
            Give securely
          </button>
        </fieldset>

        {/* Opt-in */}
        <fieldset className='mb-6'>
          <legend className='text-lg font-semibold mb-2'>
            Would you like to hear from us?
          </legend>
          <label className='block mb-2'>
            <input
              type='checkbox'
              checked={optIn}
              onChange={() => setOptIn(!optIn)}
              className='mr-2'
            />
            We would like to contact you from time to time to tell you about how
            you can support our mission, about some of our other events and
            offers, as well as send you our monthly newsletter. Please opt in to
            receiving these via the options below. You can withdraw your consent
            at any time.
          </label>
        </fieldset>
        <Button
          className='bg-emerald text-black font-bold py-2 px-4 mt-2 rounded hover:bg-blue-700'
          child={'Give Securely'}
        />
      </form>
    </div>
  );
}
export default DonationForm;
