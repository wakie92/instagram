import React from "react";
import classes from "./LikeAndReply.module.scss";
import { Like, Unlike, Comments } from "libs/images";

const LikeAndReply = ({ handleLike, handleDisLike, likeOn }) => {
  let like = likeOn === null ? handleLike : handleDisLike
  return (
    <div className={classes.IconBox}>
      <img
        alt="like"
        src={ likeOn ? Like :  Unlike}
        onClick={like}
      />
      <img alt="comments" src={Comments} />
    </div>
  );
};

export default LikeAndReply;
