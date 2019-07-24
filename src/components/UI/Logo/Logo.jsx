import React from "react";
import { LogoImg } from "libs/images";
import classes from "./Logo.module.scss";
const Logo = ({ sty }) => {
  return (
    <div className={classes.Bitmap} style={sty}>
      <img alt="logo" src={LogoImg} />
    </div>
  );
};

export default Logo;
