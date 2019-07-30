import React from "react";
import Button from "../../UI/Button/Button";
import { NavLink } from "react-router-dom";

const SeletorInHome = () => {
  return (
    <>
      <NavLink exact to="/login">
        <Button btnType="EnterToLogin" value={<p>Login</p>} />
      </NavLink>
      <NavLink exact to="/register">
        <Button btnType="EnterToRegister" value={<p>Register</p>} />
      </NavLink>
    </>
  );
};

export default SeletorInHome;
