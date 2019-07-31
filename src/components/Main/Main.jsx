import React from "react";
import classes from "./Main.module.scss";
import MainContent from "./MainContent";

const PostList = ({postList}) => {
  console.log(postList)
  const posts = postList.map((post,idx) => {

    return (
      <MainContent
        key = {post.pid_post}
        desc = {post.desc}
        pid_post = {post.pid_post}
        pid_user = {post.pid_user}
        tag_string = {post.tag_string}
        uri_json = {post.uri_json}
      />
    )
  })
  return posts;
}

const Main = ({ Logo, NavBar, postList }) => {
  return (
    <div className={classes.MainSector}>
      {Logo}
      <div className={classes.Container}>
        <PostList postList = {postList}/>
      </div>
      {NavBar}
    </div>
  );
};

export default Main;
