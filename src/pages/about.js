import React from 'react'
import Layout from '../components/layout'
import aboutStyles from './about.module.scss'
import pic1 from '../assets/images/about/about-scaled.jpg'


const About = () => {
    return (
        <Layout>
            <div className={aboutStyles.about}>
                <div className={aboutStyles.about__pic}>
                    <img className={aboutStyles.about__pic__1} src={pic1} alt='natura, fotografia'/>
                </div>
                
                <div className={aboutStyles.about__text}>
                    <p>
                        Mi chiamo Elisa e l’incontro con il mio primo Cavalier King ha segnato per me l’inizio di una bellissima avventura. Quando ho conosciuto la mia prima Cavalier, Lady Isabel, ho trovato in lei tutto ciò che desideravo in un cane: dolcezza a non finire, delicatezza, giocosità e una incredibile bellezza estetica: il mantello bianco perla e rubino mi ha stregata, come la immensa espressività degli occhi, e le orecchie, elegantissime e morbide.
                    </p> 
                    <br />
                    
                    <p>
                        Dopo l’arrivo di Lady Isabel non ho potuto più resistere e sono arrivati pian piano i miei meravigliosi amori tutti blenheim e tricolor: i miei colori preferiti. Ho iniziato ad allevare nel 2014 , ho poi conseguito il Master di Allevatore Cinofilo di ENCI (l’Ente Nazionale Della Cinofilia Italiana) sono titolare dell’affisso Enci Della Corte dei  Grandi   e, dall’inizio di questa avventura che è la mia grande passione, non ho mai smesso né mai smetterò di studiare tutto ciò che è necessario conoscere, a livello comportamentale, morfologico e veterinario (e la lista potrebbe essere infinita, perché il mondo cinofilo è vastissimo), per allevare con professionalità e impegno.  
                    </p> 
                    <br />
                    
                    <p>
                        Nel 2017 un secondo amore canino è entrato nella mia vita: due splendidi e morbidissimi Chihuahua a pelo lungo che hanno conquistato il mio cuore con la loro dolcezza, la loro affettuosità e la loro grande energia. 
                    </p>   
                    <br />
                    
                    <p>
                        Viviamo in campagna,  tutti i miei cani hanno grandi spazi verdi per correre , per divertirsi e per rincorrere le farfalle che è l’hobby preferito dei miei Cavalier e dei miei Chiuhahua.
                    </p>
                </div>        
            </div>
            
        </Layout>
        
    )
}

export default About