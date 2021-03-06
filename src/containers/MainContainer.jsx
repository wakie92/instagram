import React, { Component } from "react";
import Main from "components/Main";
import NavBar from "components/UI/NavBar";
import Logo from "components/UI/Logo";
import { getItem } from "common/StorageUtils";
import Fetch from "common/Fetch";

class MainContainer extends Component {
  state = {
    postList: []
  };
  getPost = async () => {

    const api = getItem("RestAPI");
    const user = getItem("userData").user.pid_user;
    // query: seq(페이지번호), interval(갯수), pid_target(대상유저번호)
    const query = `?seq=0&interval=20&pid_user=${user}`;
    console.log("api", api);
    const res = await Fetch(api.post_get_seq_follow, query);
    let pidUserList = [];
    await res.map((data, idx) => {
      if (idx === 0) {
        return pidUserList.push(data.pid_user);
      } else if (pidUserList[pidUserList.length - 1] !== data.pid_user) {
        return pidUserList.push(data.pid_user);
      }
      return null;
    });
    //이름 받기
    await this.setState({
      postList: res
    });
  };

  componentDidMount() {
    this.getPost();
  }

  render() {
    const { match, history } = this.props;
    return (
      <Main
        history={history}
        Logo={<Logo LogoType="TopPosition" />}
        NavBar={<NavBar url={match.url} />}
        postList={this.state.postList}
      />
    );
  }
}

export default MainContainer;
