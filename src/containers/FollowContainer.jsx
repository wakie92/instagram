import React, { Component } from 'react'
import Follow from '../components/Follow/Follow';
import { connect } from 'react-redux'
import { bindActionCreator } from 'redux';
import { getItem } from "common/StorageUtils";
import Fetch from "common/Fetch";

export class FollowContainer extends Component {


  getFollowData = async () => {

    try {
      const api = getItem("RestAPI");
      const user = getItem("userData").user.pid_user;
      
      const res = await Fetch(api.follow_get_my,'')
      console.log(res);
      //follow data 불러오기 성공
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this.getFollowData();
  }
  render() {
    const { NavBar } = this.props;
    return ( 
      <Follow
        NavBar = {NavBar}
      />
    )
  }
}

export default connect(
  ({Post}) => ({
    
  }))(FollowContainer)
