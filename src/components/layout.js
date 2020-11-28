import React from 'react'

import Header from './header'
import Footer from './footer'
import Navbar from './navbar'

import '../styles/global.css'
import layoutStyles from './layout.scss'


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