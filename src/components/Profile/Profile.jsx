import React from 'react';
import classes from './Profile.module.scss';
import ProfileOnTop from './ProfileOnTop/ProfileOnTop';
import ProfileUpload from './ProfileUpload';

const Profile = ({NavBar}) => {
  return(
    <>
      <ProfileOnTop/>
      <ProfileUpload/>
      {NavBar}
    </>
  )
}
export default Profile;