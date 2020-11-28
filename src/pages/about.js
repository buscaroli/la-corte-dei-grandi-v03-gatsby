import React from 'react'
import Layout from '../components/layout'
import aboutStyles from './about.module.scss'
import pic1 from '../assets/images/about1.jpg'


const About = () => {
    return (
        <Layout>
            <div className={aboutStyles.about}>
                <div className={aboutStyles.about__pic}>
                    <img className={aboutStyles.about__pic__1} src={pic1} alt='natura, fotografia'/>
                </div>
                
                <div className={aboutStyles.about__text}>
                    <p className={aboutStyles.about__text__1}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quia studebat laudi et dignitati, multum in virtute processerat. 
                        Si sapiens, ne tum quidem miser, <span>cum ab Oroete, praetore Darei</span>, in crucem actus est. Conferam tecum, quam cuique verso rem subicias.
                        An est aliquid, <span>quod te sua sponte delectet?</span> Ita multo sanguine profuso in laetitia et in victoria est mortuus. 
                    </p>
                    
                    <br />
                    
                    <p className={aboutStyles.about__text__3}>
                        Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit</span>. Hoc etsi multimodis reprehendi potest, tamen accipio, quod dant. 
                        Verum esto: verbum ipsum voluptatis non habet dignitatem, nec nos fortasse intellegimus. Quamquam te quidem video minime esse deterritum. Nescio quo modo praetervolavit oratio. Graecum enim hunc versum nostis omnes-: Suavis laborum est praeteritorum memoria. Duo Reges: constructio interrete. Uterque enim summo bono fruitur, id est voluptate. Nam et a te perfici istam disputationem volo, nec tua mihi oratio longa videri potest. 
                        Et ille ridens: Video, inquit, quid agas; Non enim, <span>si omnia non sequebatur</span>, idcirco non erat ortus illinc. Primum Theophrasti, Strato, physicum se voluit.
                    </p>
                </div>        
            </div>
            
        </Layout>
        
    )
}

export default About