import React from 'react'
import { Link } from 'gatsby'
import { IconContext } from 'react-icons'
import { FaFacebook } from 'react-icons/fa'
import navbarStyles from './navbar.module.scss'

function Navbar() {
    return (
        <div className={navbarStyles.navbar}>
            <ul className={navbarStyles.navbar__items}>
                <li className={`${navbarStyles.navbar__item} ${navbarStyles.navbar__items__1}`}><Link to='/'>Home</Link></li>
                <li className={`${navbarStyles.navbar__item} ${navbarStyles.navbar__items__2}`}><Link to='/about'>Chi siamo</Link></li>
                <li className={`${navbarStyles.navbar__item} ${navbarStyles.navbar__items__3}`}><Link to='/pedigree'>Pedigree</Link></li>
                <li className={`${navbarStyles.navbar__item} ${navbarStyles.navbar__items__4}`}><Link to='/pets'>Cuccioli</Link></li>
                <li className={`${navbarStyles.navbar__item} ${navbarStyles.navbar__items__5}`}><Link to='/contacts'>Contatti</Link></li>
                <li className={`${navbarStyles.navbar__item} ${navbarStyles.navbar__items__6}`}>
                    <a href='https://www.facebook.com/lacortedeigrandi/' target='_blank' rel="noopener noreferrer">
                        <IconContext.Provider value={{style: {color: '#ff8c00', fontSize: '4rem'}}}>
                            <div>
                                <FaFacebook />
                            </div> 
                        </IconContext.Provider>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar