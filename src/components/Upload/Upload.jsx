import React from 'react';
import UploadOnTop from './UploadOnTop';
import Button from 'components/UI/Button'
import UploadText from './UploadText';
import UploadImg from './UploadImg';
const Upload = ({NavBar}) => {
  return (
    <>
      <form>
        <UploadOnTop/>
        <UploadImg/>
        <UploadText textType = "description"/>
        <UploadText textType = "tag"/>
        {NavBar}
      </form>
    </>
  )
}

export default Upload;