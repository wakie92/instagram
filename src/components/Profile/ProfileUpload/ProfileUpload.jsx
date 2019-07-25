import React from 'react';
import classes from './ProfileUpload.module.scss'
import Button from 'components/UI/Button';
const ProfileUpload = () => {

  return (
     <div className = {classes.ProfileUpload}>
       <div className = {classes.ProfileImgBox}></div>
       <Button btnType = "ProfileUpload" value = "+ Upload Profile"/>
     </div> 
  )
}
export default ProfileUpload;