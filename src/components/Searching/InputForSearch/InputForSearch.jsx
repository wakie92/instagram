import React from 'react';
import classes from './InputForSearch.module.scss';

const InputForSearch = () => {

  return (
    <div className = {classes.InputBox}>
      <input type = "text" placeholder = "search new tag"/><span>Cancel</span>  
    </div>
  )
}
export default InputForSearch;