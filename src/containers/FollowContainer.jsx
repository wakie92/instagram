import React, { Component } from 'react'
import Follow from '../components/Follow/Follow';
import { connect } from 'react-redux'
import { bindActionCreator } from 'redux';
import { getItem } from "common/StorageUtils";
import Fetch from "common/Fetch";

export class FollowContainer extends Component {


  getFollowData = () => {
    const api = getItem("RestAPI");
    const user = getItem("userData").user.pid_user;
    
    const res = Fetch(api.follow_get_my,'')
    console.log(res);
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

export default FollowContainer
