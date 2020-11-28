import React, { useState } from 'react'
import Layout from '../components/layout'
import { IconContext } from 'react-icons'
import { FaFacebook } from 'react-icons/fa'
import ReactMapGL from 'react-map-gl'
import contactsStyles from './contacts.module.scss'

const Contacts = () => {

    const [viewport, setViewport] = useState({
        latitude: 44.5127578,
        longitude: 11.8291743,
        zoom: 9,
        minZoom: 5,
        maxZoom: 11,
        width: '100%',
        height: '100%'        
    })


    const icon_link = () => {
        return (
            <a href='https://www.facebook.com/lacortedeigrandi/' target='_blank' rel="noopener noreferrer">
                <IconContext.Provider value={{style: {color: '#ffaf4d', fontSize: '3rem'}}}>
                        <FaFacebook />
                </IconContext.Provider>
            </a>
        )
    }

    return (
        <Layout>
            <div className={contactsStyles.contacts}>
                <div className={contactsStyles.contacts__text}>
                    <p className={contactsStyles.contacts__text__intro}>
                        Avete visto il cane dei vostri sogni o volete ulteriori informazioni? Se volete contattarci lo potete fare tramite la nostra pagina <span>Facebook {icon_link()}</span>, li' potrete trovare tutte le informazioni che cercate.
                    </p>
                    <p>
                        Vi contatteremo al piu' presto!
                    </p>
                </div>
                <div className={contactsStyles.contacts__map}>
                    <ReactMapGL
                        className={contactsStyles.contacts__map__mapbox}
                        {...viewport} 
                        mapboxApiAccessToken={process.env.GATSBY_MAPBOX_KEY}
                        onViewportChange={viewport => {setViewport(viewport)}}
                        mapStyle={'mapbox://styles/mmontyy78/ckgzb00wy147019npvt3madnu'}>

                    </ReactMapGL>
                </div>
            </div>
        </Layout>
    )
}

export default Contacts