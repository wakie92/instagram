import React, { Component } from 'react';
import LoginInput from 'components/Home/LoginInput';
import FireAuthUser from "api/FireAuthUser";
import {
  PROJECT_NAME,
  SERVER_URL
} from "common/Constants";

class LoginContainer extends Component {
   userManager = new FireAuthUser(
    SERVER_URL,
    PROJECT_NAME,
  )
  state = {
    email : '',
    password : ''
  }

  handleChange = (e) => {
    let { value, name } = e.target
    this.setState((prevState) => ({
      [name] : value
    }))
  }

  handleSubmit = async (e) => {
    const { email, password } = this.state;
    e.preventDefault();
    try {
      const res = await this.userManager.login(email, password)
      console.log(res)
      this.props.history.push('/main')
    } catch (e) {
      console.log(e) 
    }
  }

  render() {
    return (
      <LoginInput handleChange = {this.handleChange} handleSubmit = {this.handleSubmit}/>
    );
  }
}

export default LoginContainer;
