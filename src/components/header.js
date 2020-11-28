import React from 'react'
import logo from '../assets/images/diamond.png'
import enci from '../assets/images/logo-enci-orange.png'
import fci from '../assets/images/logo-fci-orange.png'

const Header = () => {
    return (
        <div className='header'>
            
                <div className='header__logo'>
                    <img src={logo} alt='logo diamante'/>
                </div>
                <div className='header__clubs'>
                    <img className='header__clubs--fci' src={fci} alt='logo fci'/>
                    <img className='header__clubs--enci' src={enci} alt='logo enci'/>
                </div>
                <h1 className='header__title'>
                    La Corte dei Grandi
                </h1>
                <h2 className='header__subtitle'>
                    Allevamento cinofilo per la selezione del <span>Cavalier King Charles Spaniel</span>
                </h2>    
        </div>
    )
}

export default Header