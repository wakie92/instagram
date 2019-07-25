import React from "react";
import Layout from 'components/UI/Layout'
import Upload from "components/Upload";
import NavBar from 'components/UI/NavBar'
const upload = () => {
  return (
    <Layout bg = "bgGray">
      <Upload
        NavBar = {<NavBar/>}
      />
    </Layout>
  );
};
export default upload;
