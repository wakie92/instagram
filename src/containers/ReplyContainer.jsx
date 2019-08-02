import React, { Component } from 'react';
import { connect } from "react-redux";
import Reply from 'components/Reply';


class ReplyContainer extends Component {

  render() {
    const { NavBar, postCmt } = this.props;
    return (
      <Reply postCmt = {postCmt}>
        {NavBar}
      </Reply>
    );
  }
}
export default connect(
  ({Post}) => ({
    postCmt : Post.post_cmt
  }),
)(ReplyContainer);