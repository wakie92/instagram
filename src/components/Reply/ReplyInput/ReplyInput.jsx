import React from 'react';
import classes from './ReplyInput.module.scss';
import Button from '../../UI/Button/Button';

const ReplyInput =({handleReply, handleInsert}) => {

  return(
    <div className = {classes.ReplyInputContainer}>
      <input
        name = "reply"
        placeholder = "text here"
        onChange = {handleReply}
        className = {classes.ReplyInput}
      />
      <Button btnType = "Reply" value = "send" onclick = {handleInsert}/>
    </div>
  )
}

export default ReplyInput;