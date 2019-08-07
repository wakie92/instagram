import React, { Component } from "react";
import { connect } from "react-redux";
import Reply from "components/Reply";

class ReplyContainer extends Component {

  shouldComponentUpdate(nextProps,nextState) {
    return this.props.postCmt !== nextProps.postCmt;
  }
  render() {
    const { NavBar, postCmt, history } = this.props;
    return (
      <>
      <Reply
        history={history}
        postCmt={postCmt.post_cmt}
        NavBar={NavBar}       
      />
      </>
    );
  }
}
export default connect(
  ({ Post }) => ({
    postCmt: Post.post_cmt,
  })
)(ReplyContainer);
