import React from "react";
import classes from "./Replies.module.scss";

//대댓글 데이터로 받을 시 매핑필요.
//대댓글 정보 props로 받아야함.
const Replies = ({ ReOfReply, id, comment }) => {
  const reply = (
    <div className={classes.ReplyBox}>
      <div className={classes.ReplyAvatar} />
      <div className={classes.Reply}>
        {id}
        {comment}
      </div>
    </div>
  );
  return (
    <>
      {reply}
      {ReOfReply ? (
        <div className={[classes.ReplyBox, classes.ReReBox].join(' ')}>
          <div className={classes.ReplyAvatar} />
          <div className={[classes.Reply, classes.ReRe].join(' ')}>
            <span>John</span>
            <text>
            whatever my name is john..
            </text>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Replies;
