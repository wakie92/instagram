import React from "react";
import classes from "../Home.module.scss";
import Button from "../../UI/Button/Button";

const Register = ({ handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        className={classes.Rectangle3}
        type="text"
        placeholder="nickname"
        name = "nickname"
      />
      <input
        onChange={handleChange}
        className={classes.Rectangle3}
        type="email"
        placeholder="email"
        name = "id"
      />
      <input
        onChange={handleChange}
        className={classes.Rectangle3}
        type="password"
        placeholder="password"
        name = "password"
      />
      <Button btnType="Register" value={<p>Register</p>} />
    </form>
  );
};

export default Register;
