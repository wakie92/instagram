import React from "react";
import classes from "./ContentBox.module.scss";
import { NavLink } from 'react-router-dom';

const ContentBox = ({desc, tag_string, pid_user, getCmt}) => {
  return (
    <div className={classes.ContentBox}>
      <span>{pid_user}</span><br/>
      <div className={classes.Content}>
        {desc}
      </div>
        {tag_string === 'none' 
          ? null 
          : <p className={classes.HashTag}>
              {tag_string} 
            </p>
        }
      <p onClick = {getCmt}>View all comments</p>
    </div>
  );
};
export default ContentBox;
