import React from 'react'
import headerStyles from './header.scss'
import logo from '../assets/images/diamond.png'
import enci from '../assets/images/logo-enci-orange.png'
import fci from '../assets/images/logo-fci-orange.png'

const Header = () => {
    return (
        <div className={headerStyles.header}>
            
                <div className={headerStyles.header__logo}>
                    <img src={logo} alt='logo diamante'/>
                </div>
                <div className={headerStyles.header__clubs}>
                    <img className={headerStyles.header__clubs__fci} src={fci} alt='logo fci'/>
                    <img className={headerStyles.header__clubs__enci} src={enci} alt='logo enci'/>
                </div>
                <h1 className={headerStyles.header__title}>
                    La Corte dei Grandi
                </h1>
                <h2 className={headerStyles.header__subtitl}>
                    Allevamento cinofilo per la selezione del <span>Cavalier King Charles Spaniel</span>
                </h2>    
        </div>
    )
}

export default Header