import React, { Component } from 'react';
import Register from '../components/Home/Register/Register';
import FireAuthUser from "../api/FireAuthUser";
import {
  PROJECT_NAME,
  SERVER_URL
} from "../common/Constants";

class RegisterContainer extends Component {

  userManager = new FireAuthUser(
    SERVER_URL,
    PROJECT_NAME,
  )
  
  state = {
    nickname : '',
    id : '',
    password : ''
  }

  handleChange = (e) => {
    let { value, name } = e.target
    this.setState((prevState) => ({
      [name] : value
    }))
  }

  handleSubmit = async (e) => {
    const { id, password, nickname } = this.state;
    e.preventDefault();
    try {
      const bodyData = {
        user: {
          id,
          user_name: nickname,
          user_type: 0
        },
        user_auth: {
          typ_login: 1,
          password,
        }
      };
      console.log(bodyData);
      const res = await this.userManager.signUp(bodyData);
      console.log('회원가입 응답 값', res);
    } catch (e) {
      console.log(e) 
    }
  }

  render() {

    return (
      <Register handleChange = {this.handleChange} handleSubmit = {this.handleSubmit}/>
    );
  }
}

export default RegisterContainer;