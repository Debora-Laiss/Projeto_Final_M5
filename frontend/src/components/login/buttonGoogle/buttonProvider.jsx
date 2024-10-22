import React, { useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import handleLogin from './button';
import { useNavigate } from 'react-router-dom';

const ButtonProvider = () => {
  const clientId = '367692770833-6k9vracsbrmiptaj6alrjngaeaf0uqu8.apps.googleusercontent.com';
  const navigate = useNavigate();


  const onLoginSuccess = (response) => {
    handleLogin(response);  
    navigate('/home');     
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('3 segundos se passaram');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={onLoginSuccess}  
          onError={() => {
            console.log('Login falhou');
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default ButtonProvider;
