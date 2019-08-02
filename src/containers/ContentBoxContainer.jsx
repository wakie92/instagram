import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ContentBox from "components/Main/MainContent/ContentBox";
import { getItem } from "common/StorageUtils";
import Fetch from "common/Fetch";
import * as postActions  from 'store/modules/post';


class ContentBoxContainer extends Component {
  
  getCmt = async () => {
    const { PostActions } = this.props;
    const api = getItem("RestAPI");
    const query = `?pid=${this.props.pid_post}`;
    const cmt = await Fetch(api.post_get_comment, query);
    PostActions.getPostCmt(cmt);
  };

  render() {
    const { pid_user, tag_string, desc, pid_post } = this.props;
    return (
      <ContentBox
        pid_post={pid_post}
        getCmt={this.getCmt}
        id_user={pid_user}
        tag_string={tag_string}
        desc={desc}
      />
    );
  }
}

export default connect(
  ({Post}) => ({
    postCmt : Post.post_cmt
  }),
  (dispatch) =>  ({
    PostActions : bindActionCreators(postActions,dispatch)})
)(ContentBoxContainer);
