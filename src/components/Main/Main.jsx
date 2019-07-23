import React from 'react';
import classes from './Main.module.scss';
import Logo from 'components/UI/Logo'
const Main = ({children}) => {
  const sty = {paddingTop : '10px', paddingBottom : `13px`}
  return(
    <>
      <Logo sty = {sty}/>
      <div>
        slksdfjlsdfj
      </div>
      {children}
    </>
  )
}
export default Main;