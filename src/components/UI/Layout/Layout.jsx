import React from 'react';
import classes from './Layout.module.scss';

const Layout = ({children}) => {
  return (
    <div className = {classes.Rectangle}>
      {children}
    </div>
  )
}
export default Layout;