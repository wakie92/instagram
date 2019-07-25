import React from 'react';
import classes from './UploadText.module.scss'

const UploadText = ({textType}) => {
  return (
    <textarea placeholder = {textType}/>
  )
}

export default UploadText
