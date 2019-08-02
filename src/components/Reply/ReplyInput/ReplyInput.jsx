import React from 'react';
import classes from './ReplyInput.module.scss';
import Button from '../../UI/Button/Button';

const ReplyInput = () => {

  return(
    <div className = {classes.ReplyInputContainer}>
      <input
        name = "reply"
        placeholder = "text here"
        className = {classes.ReplyInput}
      />
      <Button btnType = "Reply" value = "send" />
    </div>
  )
}

export default ReplyInput;