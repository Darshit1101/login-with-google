import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const GoogleLoginButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSuccess = async (credentialResponse) => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        'http://localhost:5000/api/auth/google-login',
        {
          token: credentialResponse.credential,
        }
      );
      alert(`Welcome ${res.data.user.name}`);
    } catch (err) {
      console.error('Login error:', err);
      alert('Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='flex justify-center items-center my-4'>
        {isLoading && (
          <div className='absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 rounded-lg z-10'>
            <div className='animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500'></div>
          </div>
        )}
        <div className='bg-white rounded-lg shadow-md hover:shadow-xl border border-gray-200 p-1 transition-all duration-300'>
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => {
              console.log('Login Failed');
              alert('Google Login Failed');
            }}
            theme='filled_blue'
            size='large'
            shape='rectangular'
            logo_alignment='left'
          />
        </div>
    </div>
  );
};

export default GoogleLoginButton;
