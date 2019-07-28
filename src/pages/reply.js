import React from 'react'
import Layout from 'components/UI/Layout/Layout';
import Reply from 'components/Reply';
import Logo from 'components/UI/Logo';
import NavBar from 'components/UI/NavBar'

const reply = ({match}) => {
  return (
    <Layout bg = "bgGray">
      <Reply
        NavBar = {<NavBar url = {match.url}/>}
      />
    </Layout>
  )
}
export default reply;