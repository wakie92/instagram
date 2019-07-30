import React from "react";
import Home from "components/Home";
import Layout from "components/UI/Layout";
import SeletorInHome from "components/Home/SeletorInHome";
const home = ({match, history}) => {
  console.log();
  return (
    <Layout>
      <Home matchData = {match.url} history = {history}>
        <SeletorInHome />
      </Home>
    </Layout>
  );
};

export default home;
