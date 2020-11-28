import React from 'react'
import Layout from '../components/layout'
import indexStyles from './index.scss'
import pic1 from '../assets/images/home/home-pic1.jpg'
import pic2 from '../assets/images/home/home-pic2.jpg'
import pic3 from '../assets/images/home/home-pic3.jpg'

const Homepage = () => {
    return (
        <Layout>
            <div className={indexStyles.home}>
                <div className={indexStyles.home__pic}><img className={indexStyles.home__pic__1} src={pic1} alt='logo fci'/></div>
                <div className={`${indexStyles.home__text} ${indexStyles.home__text__1}`}>De tierra come larga mármol manos muerte pensamiento de los, <span>pensamiento del atrás se donde</span>. Muelles quedo cosas nino manos. Me quedo ballenas ciudades con plata tierra.</div>
                <div className={`${indexStyles.home__text} ${indexStyles.home__text__2}`}>Des l'orgueil cloués poussifs les cotons. D'or zones îles et comme lames quand, cotons des <span>cataractant cataractant j'ai vers</span>. Aux des moi ivre insoucieux des gouffres sous fond faisait.</div>
                <div className={indexStyles.home__pic}><img className={indexStyles.home__pic__2} src={pic2} alt='logo fci'/></div>
                <div className={indexStyles.home__pic}><img className={indexStyles.home__pic__3} src={pic3} alt='logo fci'/></div>
                <div className={`${indexStyles.home__text} ${indexStyles.home__text__3}`}>Esperienza da di di che suo per, l'acume di propria nondimeno il alla seguitando propria ma come, <span>noi priegano intendo e fermi oportune prestasse al coloro nostr</span>a, i quali ora tale di udita oppinione. Siamo medesimi benignita e sí trapassare.</div>
            </div>
        </Layout>
        
    )
}

export default Homepage