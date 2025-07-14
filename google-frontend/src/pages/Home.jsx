import React from 'react';
import GoogleLoginButton from '../components/GoogleLoginButton';

const Home = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 flex items-center justify-center p-4'>
      <div className='bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full transform transition-all duration-300'>
        {/* Header */}
        <div className='text-center'>
          <h1 className='text-3xl font-bold text-gray-800 mb-2'>
            Welcome Back
          </h1>
          <p className='text-gray-600 text-lg'>
            Sign in to your account using Google
          </p>
        </div>

        {/* Google Login Button */}
        <GoogleLoginButton />

        {/* Footer */}
        <div className='mt-8 pt-6 border-t border-gray-200 text-center'>
          <p className='text-sm text-gray-500 flex items-center justify-center'>
            <svg
              className='w-4 h-4 mr-2'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z' />
            </svg>
            Secure login powered by Google OAuth
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
