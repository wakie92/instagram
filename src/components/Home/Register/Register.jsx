import React from "react";
import classes from '../Home.module.scss'
import Button from '../../UI/Button/Button';


const Register = () => {
  return (
    <>
      <input className = {classes.Rectangle3} type = 'text' placeholder = "nickname"/>
      <input className = {classes.Rectangle3} type = 'email' placeholder = "email"/>
      <input className = {classes.Rectangle3} type = 'password' placeholder = "password"/>
      <Button
        btnType = 'Register'
        value = {<p>Register</p>}
      />
    </>
  )
};

export default Register;
