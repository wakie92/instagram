import React from 'react'
import Layout from 'components/UI/Layout/Layout';
import Reply from 'components/Reply';
import Logo from 'components/UI/Logo';
import NavBar from 'components/UI/NavBar'

const reply = () => {
  return (
    <Layout bg = "bgGray">
      <Reply
        NavBar = {<NavBar/>}
      />
    </Layout>
  )
}
export default reply;