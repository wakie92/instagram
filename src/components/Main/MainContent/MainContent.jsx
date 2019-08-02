import React from "react";
import classes from "./MainContent.module.scss";
import ContentHeader from "./ContentHeader";
import ContentImg from "./ContentImg";
import LikeAndReplyContainer from "containers/LikeAndReplyContainer";
import ContentBoxContainer from "containers/ContentBoxContainer";

const MainContent = ({
  desc,
  key,
  pid_user,
  pid_post,
  tag_string,
  uri_json
}) => {
  return (
    <div className={classes.ContentBox} key={pid_post}>
      <ContentHeader pid_user={pid_user} />
      <ContentImg uri_json={uri_json} />
      <LikeAndReplyContainer pid_post={pid_post} pid_target={pid_user} />
      <ContentBoxContainer
        pid_post={pid_post}
        pid_user={pid_user}
        tag_string={tag_string}
        desc={desc}
      />
    </div>
  );
};
export default MainContent;
