import React from 'react'
import ResponsiveAppBar from './appbar'

const Layout = (props) => {
  return (<div>
    <ResponsiveAppBar/>
    {props.children}
  </div>)
}

export default Layout