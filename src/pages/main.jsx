import React from 'react';
import MainContainer from 'containers/MainContainer';
import Layout from 'components/UI/Layout'


const main = ({match}) => {
  return (
    <Layout>
      <MainContainer match = {match}/>
    </Layout>
  )
}

export default main;
