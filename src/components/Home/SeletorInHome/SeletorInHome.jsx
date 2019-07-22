import React from 'react';
import Button from '../../UI/Button/Button';

const SeletorInHome = () => {

  return(
    <>
      <Button
        btnType = 'EnterToLogin'
        value = {<p>Login</p>}
      />
      <Button
        btnType = 'EnterToRegister'
        value = {<p>Register</p>}
      />
    </>
  )
}

export default SeletorInHome;