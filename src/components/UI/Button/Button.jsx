import React from "react";
import classes from "./Button.module.scss";
const Button = ({ btnType, value }) => {
  return (
    <button className={[classes.Button, classes[btnType]].join(" ")}>
      {value}
    </button>
  );
};
export default Button;
