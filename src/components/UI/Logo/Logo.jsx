import React from "react";
import { LogoImg } from "libs/images";
import classes from "./Logo.module.scss";
const Logo = ({ LogoType }) => {
  return (
    <div className={[classes.Bitmap, classes[LogoType]].join(' ')}>
      <img alt="logo" src={LogoImg} />
    </div>
  );
};

export default Logo;
