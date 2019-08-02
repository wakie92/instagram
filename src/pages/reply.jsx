import React from "react";
import Layout from "components/UI/Layout/Layout";
import NavBar from "components/UI/NavBar";
import ReplyContainer from "../containers/ReplyContainer";

const reply = ({ match, history }) => {
  return (
    <Layout bg="bgGray">
      <ReplyContainer history={history} NavBar={<NavBar url={match.url} />} />
    </Layout>
  );
};
export default reply;
