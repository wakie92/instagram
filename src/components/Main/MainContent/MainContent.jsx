import React from "react";
import classes from "./MainContent.module.scss";
import ContentHeader from "./ContentHeader";
import ContentImg from "./ContentImg";
import LikeAndReply from "./LikeAndReply";
import ContentBox from "./ContentBox";

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
      <LikeAndReply />
      <ContentBox pid_user={pid_user} tag_string={tag_string} desc={desc} />
    </div>
  );
};
export default MainContent;
