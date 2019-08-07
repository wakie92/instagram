import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import ReplyInput from 'components/Reply/ReplyInput'
import { getItem } from "common/StorageUtils";
import Fetch from "common/Fetch";
import * as likeAndReplyAction from "store/modules/like_reply";
import * as postActions from "store/modules/post";

class ReplyInputContainer extends Component {
 
  handleReply = e => {
    const { value } = e.target;
    const { LikeAndReplyAction } = this.props;
    LikeAndReplyAction.updateReply(value);
  };
  
  handleInsert = async e => {
    try {
      const api = getItem("RestAPI").post_cmt_insert;
      const { pid_user, user_name } = getItem("userData").user;
      const { reply, curPost, LikeAndReplyAction,  PostActions } = this.props;
      const body = {
        post_cmt: {
          pid_user: pid_user,
          user_name: user_name,
          pid_parent: curPost,
          body: reply
        }
      };
      // 댓글 입력 에러 발생
      const res = await Fetch(api, "", body);
      if (res) {
        PostActions.updatePostCmt(body.post_cmt);
        LikeAndReplyAction.updateReply('');
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { handleInsert, handleReply } = this;
    return (
      <ReplyInput reply = {this.props.reply} handleReply = {handleReply} handleInsert = {handleInsert}/>
    )
  }
}
export default connect(
  ({Post, Like_Reply}) => ({
    postCmt: Post.post_cmt,
    reply : Like_Reply.reply,
    curPost : Post.cur_post
  }),
  dispatch => ({
    LikeAndReplyAction: bindActionCreators(likeAndReplyAction, dispatch),
    PostActions: bindActionCreators(postActions, dispatch)
  })
)(ReplyInputContainer);