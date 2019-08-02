import React from 'react'
import Layout from 'components/UI/Layout/Layout';
import NavBar from 'components/UI/NavBar'
import ReplyContainer from '../containers/ReplyContainer';

const reply = ({match}) => {
  return (
    <Layout bg = "bgGray">
      <ReplyContainer
        NavBar = {<NavBar url = {match.url}/>}
      />
    </Layout>
  )
}
export default reply;