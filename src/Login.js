import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth, provider } from './firebase';
import './Login.css';

function Login() {
  const dispatch = useDispatch();
  const sigIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0-2048x1151.jpg'
          alt='Google'
        />

        <Button variant='contained' color='primary' onClick={sigIn}>
          Login
        </Button>
      </div>
    </div>
  );
}
export default Login;