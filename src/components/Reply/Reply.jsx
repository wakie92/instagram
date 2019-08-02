import React from "react";
import classes from './Reply.module.scss'
import ReplyOnTop from "./ReplyOnTop";
import Replies from "./Replies";
import ReplyInput from "./ReplyInput";


const RepliesBox = ({postCmt}) => {
  const cmtData = postCmt.map((cmt) => {
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
  return (
    {cmtData}
  )
}




const Reply = ({ NavBar, postCmt }) => {


  return (
    <>
      <ReplyOnTop />
      <div className = {classes.Container}>
        <div>
          <RepliesBox postCmt = {postCmt}/>
          <Replies
            id={<span>Justin</span>}
            comment={
              <text>
                Our curated library of royalty-free music gives you the polished
                feel of the big production houses. All our tracks are exclusive
                and copyright clear.
              </text>
            }
          />
          <Replies
            id={<span>Justin</span>}
            comment={
              <text>
                Our curated library of royalty-free music gives you the polished
                feel of the big production houses. All our tracks are exclusive
                and copyright clear.
              </text>
            }
            ReOfReply={true}
          />
        </div>
        <ReplyInput />
      </div>
      {NavBar}
    </>
  );
};

export default Reply;
