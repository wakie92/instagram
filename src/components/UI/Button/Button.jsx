import React from "react";
import classes from "./Button.module.scss";
const Button = ({ btnType, value, onclick }) => {
  return (
    <button 
      className={[classes.Button, classes[btnType]].join(" ")}
      onClick = {onclick}
      >
      {value}
    </button>
  );
};
export default Button;
