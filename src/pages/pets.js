import React from 'react'
import Layout from '../components/layout'
import petsStyles from './pets.module.scss'


const Pets = () => {

    return (
        <Layout>
            <div className={petsStyles.gallery}>
                Pets Page
            </div>
        </Layout>
        
    )
}

export default Pets