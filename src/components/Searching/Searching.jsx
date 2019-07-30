import React from 'react';
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