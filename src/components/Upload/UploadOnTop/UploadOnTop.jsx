import React from 'react'
import classes from './UploadOnTop.module.scss'

const UploadOnTop = () => {
  return (
    <div className = {classes.UploadOnTop}>
      <span style = {{visibility:'hidden', marginLeft : '16px'}}>Done</span>
      <span>Upload</span>
      <span style = {{marginRight: '16px' ,color : '#4a90e2'}}>Done</span>
    </div>
  )
}
export default UploadOnTop;