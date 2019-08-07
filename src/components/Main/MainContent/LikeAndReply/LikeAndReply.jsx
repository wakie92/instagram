import React from "react";
import classes from "./LikeAndReply.module.scss";
import img from "libs/images";

const LikeAndReply = ({ handleLike, handleDisLike, likeOn }) => {
  let like = likeOn === null ? handleLike : handleDisLike
  return (
    <div className={classes.IconBox}>
      <img
        alt="like"
        src={ likeOn ? img.Like :  img.Unlike}
        onClick={like}
      />
      <img alt="comments" src={img.Comments} />
    </div>
  );
};

export default LikeAndReply;
