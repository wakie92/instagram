import React from "react";
import Layout from "components/UI/Layout/Layout";
import NavBar from "components/UI/NavBar";
import ReplyContainer from "../containers/ReplyInputContainer";
import ReplyOnTop from "../components/Reply/ReplyOnTop";
import Reply from "../components/Reply/Reply";

const reply = ({ match, history }) => {
  return (
    <Layout bg="bgGray">
      <ReplyOnTop />
      <Reply 
        history={history} 
        NavBar={<NavBar url={match.url} />} 
      />
    </Layout>
  );
};
export default reply;
