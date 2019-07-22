import React from "react";
import Register from "components/Home/Register";
import Layout from "components/UI/Layout";
import Home from "../components/Home/Home";

const register = () => {
  return (
    <Layout>
      <Home>
        <Register />
      </Home>
    </Layout>
  );
};

export default register;
