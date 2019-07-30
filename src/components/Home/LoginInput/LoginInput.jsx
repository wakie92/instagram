import React from "react";
import classes from "../Home.module.scss";
import Button from "../../UI/Button/Button";

const LoginInput = ({handleChange , handleSubmit}) => {
  return (
    <form onSubmit = {handleSubmit}>
      <input 
        className={classes.Rectangle3} 
        type="text" 
        placeholder="email" 
        name = "email"
        onChange = {handleChange}
      />
      <input
        className={classes.Rectangle3}
        type="password"
        placeholder="password"
        name = "password"
        onChange = {handleChange}
      />
      <Button btnType="Login" value={<p>Login</p>} />
    </form>
  );
};

export default LoginInput;
