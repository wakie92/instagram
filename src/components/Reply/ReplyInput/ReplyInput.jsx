import React from 'react';
import classes from './ReplyInput.module.scss';
import Button from '../../UI/Button/Button';

const ReplyInput =({handleReply,reply, handleInsert}) => {

  return(
    <div className = {classes.ReplyInputContainer}>
      <input
        name = "reply"
        placeholder = "text here"
        onChange = {handleReply}
        value = {reply}
        autoComplete="off"
        className = {classes.ReplyInput}
      />
      <Button btnType = "Reply" value = "send" onclick = {handleInsert}/>
    </div>
  )
}

export default ReplyInput;