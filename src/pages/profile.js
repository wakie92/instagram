import React from 'react';
import Layout from 'components/UI/Layout';
import Profile from '../components/Profile';
import NavBar from '../components/UI/NavBar';

const profile = ({match}) => {

  return(
    <Layout bg = "bgGray">
      <Profile NavBar = {<NavBar url = {match.url}/>}/>
    </Layout>
  )
}
export default profile;