import React from "react";
import classes from './Reply.module.scss'
import Replies from "./Replies";
import ReplyInput from "./ReplyInput";
import ReplyInputContainer from "../../containers/ReplyInputContainer";

const RepliesBox = ({postCmt}) => {
  let cmtData = null;
  if(!postCmt) {
    return (<div>잘못된 경로</div>);
  } else if(postCmt.code) {
    return null
  } else {
    cmtData = postCmt.map((cmt) => {
      return (
        <Replies
          key = {cmt.pid_post_cmt}
          id = {<span>{cmt.user_name}</span>}
          comment = {
            <div>{cmt.body}</div>
          }
        />
      )
    }) 
  }
  return (
    cmtData
  )
}

const Reply = ({ NavBar, postCmt }) => {
  return (
    <>
      <div className = {classes.Container}>
        <div className = {classes.Replies}>
          <RepliesBox postCmt = {postCmt}/>
        </div>
        <ReplyInputContainer/> 
      </div>
      {NavBar}
    </>
  );
};

export default Reply;
