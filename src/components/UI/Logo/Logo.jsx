import React from "react";
import Logoimg from "libs/bitmap_2019-07-22/bitmap.png";
import classes from "./Logo.module.scss";
const Logo = () => {
  return (
    <div className={classes.Bitmap}>
      <img alt="logo" src={Logoimg} />
    </div>
  );
};

export default Logo;
