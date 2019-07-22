import React from 'react';
import classes from '../Home.module.scss';
import Button from '../../UI/Button/Button';

const LoginInput = () => {
  return(
    <>
      <input className = {classes.Rectangle3} type = 'text' placeholder = "email"/>
      <input className = {classes.Rectangle3} type = 'password' placeholder = "password"/>
      <Button
        btnType = 'Login'
        value = {<p>Login</p>}
      />
    </>
  )
}

export default LoginInput;
