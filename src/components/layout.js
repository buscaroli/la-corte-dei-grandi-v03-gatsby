import React from 'react'

import Header from './header'
import Footer from './footer'
import Navbar from './navbar'

import layoutStyles from './layout.module.scss'

function Layout(props) {
    return (
        <div className={layoutStyles.layout}>
            <Navbar />
            <Header />
                { props.children }
            <Footer />
        </div>
    )
}

export default Layout