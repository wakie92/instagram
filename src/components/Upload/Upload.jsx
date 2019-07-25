import React from 'react';
import UploadOnTop from './UploadOnTop';
import Button from 'components/UI/Button'
import UploadText from './UploadText';
const Upload = ({NavBar}) => {
  return (
    <>
      <form>
        <UploadOnTop/>
        <Button btnType = "Upload" value = "+ Add Image"/>
        <UploadText textType = "description"/>
        <UploadText textType = "tag"/>
        {NavBar}
      </form>
    </>
  )
}

export default Upload;