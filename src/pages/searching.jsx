import React from 'react';
import Layout from 'components/UI/Layout'
import NavBar from 'components/UI/NavBar';
import Searching from '../components/Searching';
import Logo from '../components/UI/Logo';

const searching = ({match}) => {
  return(
    <Layout bg = "bgGray">
      <Searching
        Logo = {<Logo LogoType = "TopPosition"/>}
        NavBar = {<NavBar url = {match.url}/>}
      />
    </Layout>
  )
}
export default searching;