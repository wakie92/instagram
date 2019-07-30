import React from "react";
import classes from "./ContentImg.module.scss";
import { Sample } from "libs/images";

const ContentImg = () => {
  return <img className = {classes.Image} alt="img" src={Sample} />;
};
export default ContentImg;
