import React from 'react'
import Layout from '../components/layout'
import indexStyles from './index.module.scss'
import pic1 from '../assets/images/home/vertical1.jpg'
import pic2 from '../assets/images/home/vertical2.jpg'
// import pic3 from '../assets/images/home/home-pic3-ex.jpg'

const Homepage = () => {
    return (
        <Layout>
            <div className={indexStyles.home}>
                <div className={indexStyles.home__pic}><img className={indexStyles.home__pic__1} src={pic1} alt='logo fci'/></div>
                <div className={`${indexStyles.home__text} ${indexStyles.home__text__1}`}>
                    “Un cane sa ascoltare e sa persino leggere. Non i libri, quelli sono capaci tutti tranne lui. <span>Il cane sa leggere il cuore dell’uomo</span>.”(Fabrizio Caramagna)
                    <br />
                    <br />
                    <br />
                    “Chi non ha avuto un cane non sa cosa significhi <span>essere amato</span>.” ( Arthur Schopenhauer)
                </div>
                <div className={`${indexStyles.home__text} ${indexStyles.home__text__2}`}>“I cani hanno bisogno di annusare il terreno: è il loro modo di tenersi aggiornati sui fatti di attualità. <span>Il terreno è un gigantesco  giornale per cani</span>, contenente tutti i tipi di notizie canine dell’ultima ora, che, se sono particolarmente urgenti, proseguono nel terreno successivo” (Dave Berry)</div>
                <div className={indexStyles.home__pic}><img className={indexStyles.home__pic__2} src={pic2} alt='logo fci'/></div>
                
            </div>
        </Layout>
        
    )
}

export default Homepage