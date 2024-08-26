import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className='login-container'>
      <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <div className='bg-white p-6 rounded-lg shadow-md w-full max-w-md'>
          <h2 className='text-2xl font-bold mb-6 text-center'>Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label
                htmlFor='username'
                className='block text-sm font-medium text-gray-700'
              >
                Username
              </label>
              <input
                type='text'
                id='username'
                className='mt-1 p-2 w-full border border-gray-300 rounded-md'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700'
              >
                Password
              </label>
              <input
                type='password'
                id='password'
                className='mt-1 p-2 w-full border border-gray-300 rounded-md'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Link to='/admin/animals'>
              <Button
                className='bg-emerald text-black font-bold py-2 px-8 mr-2 rounded hover:bg-blue-700'
                child={'Login'}
              />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
