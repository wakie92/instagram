import React from "react";
import RegisterContainer from "containers/RegisterContainer";
import Layout from "components/UI/Layout";
import Home from "../components/Home/Home";

const register = ({history}) => {
  return (
    <Layout>
      <Home>
        <RegisterContainer history = {history}/>
      </Home>
    </Layout>
  );
};

export default register;
