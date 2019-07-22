import React from "react";
import Home from "components/Home";
import Layout from "components/UI/Layout";
import SeletorInHome from "components/Home/SeletorInHome";
const home = ({match}) => {
  return (
    <Layout>
      <Home matchData = {match.url}>
        <SeletorInHome />
      </Home>
    </Layout>
  );
};

export default home;
