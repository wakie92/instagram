import React from 'react';
import Main from 'components/Main';
import Layout from 'components/UI/Layout'
import NavBar from 'components/UI/NavBar';
import Logo from 'components/UI/Logo';

const main = ({match}) => {
  return (
    <Layout>
      <Main
        Logo = {<Logo LogoType = "TopPosition"/>}
        NavBar = {<NavBar url = {match.url}/>}
      >
      </Main>
    </Layout>
  )
}

export default main;
