import React from "react";
import Login from "components/Home/LoginInput";
import Layout from "components/UI/Layout";
import Home from "../components/Home/Home";

const login = () => {
  return (
    <Layout>
      <Home>
        <Login />
      </Home>
    </Layout>
  );
};

export default login;
