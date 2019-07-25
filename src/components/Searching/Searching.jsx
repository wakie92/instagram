import React from 'react';
import classes from './Searching.module.scss';
import InputForSearch from './InputForSearch';
import ResultSearch from './ResultSearch';


const Searching = ({NavBar}) => {
  return (
    <>
      <InputForSearch/>
      <ResultSearch/>
      {NavBar}
    </>
  )
}

export default Searching;