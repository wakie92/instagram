import React from 'react';
import Layout from 'components/UI/Layout';
import Profile from '../components/Profile';
import NavBar from '../components/UI/NavBar';

const profile = () => {

  return(
    <Layout bg = "bgGray">
      <Profile NavBar = {<NavBar/>}/>
    </Layout>
  )
}
export default profile;