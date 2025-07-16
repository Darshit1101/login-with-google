import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { publicApi } from '@api';

const GoogleLoginButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSuccess = async (credentialResponse) => {
    setIsLoading(true);
    try {
      const res = await publicApi.post('/auth/google-login', {
        token: credentialResponse.credential
      });
      alert(`Welcome ${res.data.user.name}`);
    } catch (err) {
      console.error('Login error:', err);
      alert('Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center my-4">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 rounded-lg z-10">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
        </div>
      )}
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => alert('Google Login Failed')}
        theme="outline" // or 'filled_blue'
        size="medium" // 'small', 'medium', 'large'
        shape="pill" // 'rectangular', 'pill', 'circle', 'square'
        text="continue_with" // 'signin_with', 'signup_with', etc.
        logo_alignment="center" // 'left' or 'center'
        width="200" // optional: you can wrap with a div and set width
      />
    </div>
  );
};

export default GoogleLoginButton;
