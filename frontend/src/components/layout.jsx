import React from 'react'
import ResponsiveAppBar from './appbar'
import Footer from './footer'

const Layout = (props) => {
    return (
        <div>
            <ResponsiveAppBar />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout
