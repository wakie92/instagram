import React from "react";
import Layout from "components/UI/Layout/Layout";
import NavBar from "components/UI/NavBar";
import ReplyContainer from "../containers/ReplyContainer";
import ReplyOnTop from "../components/Reply/ReplyOnTop";

const reply = ({ match, history }) => {
  return (
    <Layout bg="bgGray">
      <ReplyOnTop />
      <ReplyContainer 
        history={history} 
        NavBar={<NavBar url={match.url} />} 
      />
    </Layout>
  );
};
export default reply;
