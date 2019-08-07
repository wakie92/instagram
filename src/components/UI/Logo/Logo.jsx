import React from "react";
import img from "libs/images";
import classes from "./Logo.module.scss";
const Logo = ({ LogoType }) => {
  return (
    <div className={[classes.Bitmap, classes[LogoType]].join(' ')}>
      <img alt="logo" src={img.LogoImg} />
    </div>
  );
};

export default Logo;
