import React from "react";
import LoginContainer from "containers/LoginContainer";
import Layout from "components/UI/Layout";
import Home from "../components/Home/Home";

const login = ({history}) => {
 
  return (
    <Layout>
      <Home>
        <LoginContainer history= {history}/>
      </Home>
    </Layout>
  );
};

export default login;
 