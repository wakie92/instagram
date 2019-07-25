import React from 'react';
import classes from './Layout.module.scss';

const Layout = ({children, bg}) => {
  return (
    <div className = {[classes.Rectangle, classes[bg]].join(' ')}>
      {children}
    </div>
  )
}
export default Layout;