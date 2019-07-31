import React from "react";
import classes from "./ContentImg.module.scss";

const ContentImg = ({uri_json}) => {
  const data = JSON.parse(uri_json)
  return <img className = {classes.Image} alt="img" src={data.location} />;
};
export default ContentImg;
