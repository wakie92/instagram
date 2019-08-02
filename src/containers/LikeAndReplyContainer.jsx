import React, { Component } from "react";
import LikeAndReply from "../components/Main/MainContent/LikeAndReply";
import Fetch from "../common/Fetch";
import { getItem } from "../common/StorageUtils";

const api = getItem("RestAPI");
const userId = getItem("userData");

class LikeAndReplyContainer extends Component {
  
  state = {
    idLike : null
  }
  handleDisLike = async () => {
    const bodyData = {
      log_like: {
        pid_user: userId.user.pid_user,
        pid_log_like: this.state.idLike
      }
    };
    console.log(bodyData)
    try {
      await Fetch(api.log_like_delete, "",  bodyData);
      await this.setState({idLike : null});
    } catch(e) {
      console.log(e);
    }
  };

  handleLike = async () => {
    const { pid_target, pid_post} = this.props;
    console.log(userId)
    const bodyData = {
      log_like: {
        pid_target: pid_target,
        pid_user: userId.user.pid_user,
        pid_post: pid_post
      }
    };
    try {
        const doLike = await Fetch(api.log_like_do_like, "", bodyData);
        (await doLike) && this.setState({idLike : doLike});
    } catch(e) {
      console.log(e)
    }
  }
  render() {
    const { handleDisLike, handleLike } = this;
    return (
      <LikeAndReply
        handleLike={handleLike}
        handleDisLike = {handleDisLike}
        likeOn={this.state.idLike}
      />
    );
  }
}

export default LikeAndReplyContainer;