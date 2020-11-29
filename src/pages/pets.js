import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import petsStyles from './pets.module.scss'


const Pets = () => {
    const data = useStaticQuery(graphql`
        query { 
            allFile(filter: {relativePath: {}, sourceInstanceName: {eq: "pets"}}) 
            {
                nodes {
                    childImageSharp {
                        sizes {
                            originalName
                            src
                        }
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                    id
                }
            
            }
        }
    `)

    const imageList = data.allFile.nodes.map(picture => {
        if (!picture) return ''

        return (
            <div key={ picture.id }className={petsStyles.gallery__div}>
                {/* <img className={petsStyles.gallery__pic} src={picture.childImageSharp.fluid.src} alt='cucciolo' ></img>
                 */}
                 <Img className={petsStyles.gallery__pic} fluid={picture.childImageSharp.fluid} alt='cucciolo' />
            </div>
        )
    })


    return (
        <Layout>
            <div>
                <div className={petsStyles.title}>I Nostri Cuccioli</div>
                <div className={petsStyles.gallery}>
                    {imageList} 
                </div>
            </div>
        </Layout>
        
    )
}

export default Pets