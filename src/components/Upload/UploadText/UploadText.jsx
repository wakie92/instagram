import React from 'react';
import classes from './UploadText.module.scss'

const UploadText = ({textType}) => {
  return (
    <textarea className = {classes.TextArea} placeholder = {textType}/>
  )
}

export default UploadText
