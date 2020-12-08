import React from 'react';
import { Button } from '@material-ui/core';

import './Login.css';

import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

const Login = () => {
  const [{}, dispatch] = useStateValue();

  const signin = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result);
      })
      .catch(error => alert(error.message));
  };

  return (
    <div className='login'>
      <div className='login__logo'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png'
          alt=''
        />
        <img
          src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg'
          alt=''
        />
      </div>
      <Button type='submit' onClick={signin}>
        Sign in
      </Button>
    </div>
  );
};

export default Login;