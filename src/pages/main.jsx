import React from 'react';
import MainContainer from 'containers/MainContainer';
import Layout from 'components/UI/Layout'


const main = ({match, history}) => {
  return (
    <Layout>
      <MainContainer match = {match} history = {history}/>
    </Layout>
  )
}

export default main;
