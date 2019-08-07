import React from 'react'
import FollowContainer from '../containers/FollowContainer';
import Layout from 'components/UI/Layout';
import NavBar from 'components/UI/NavBar'

const follow = ({match}) => {
  return(
    <Layout bg = "bgGray">
      <FollowContainer
        NavBar = {<NavBar url = {match.url}/>}
      />
    </Layout>
  )
}
export default follow;