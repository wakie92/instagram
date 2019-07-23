import React from 'react';
import Main from 'components/Main';
import Layout from 'components/UI/Layout'
import MainBottom from 'components/Main/MainBottom';
const main = () => {
  return (
    <Layout>
      <Main>
        <MainBottom/>
      </Main>
    </Layout>
  )
}

export default main;
