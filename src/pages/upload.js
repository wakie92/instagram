import React from "react";
import Layout from 'components/UI/Layout'
import Upload from "components/Upload";
import NavBar from 'components/UI/NavBar'
const upload = ({match}) => {
  return (
    <Layout bg = "bgGray">
      <Upload
        NavBar = {<NavBar url = {match.url}/>}
      />
    </Layout>
  );
};
export default upload;
