import React from 'react'
import Layout from '../components/layout'

import page404Styles from './404.module.scss'


function Page404() {
    return (
        <Layout>
            <h1 className={page404Styles.title}>404</h1>
            <h2 className={page404Styles.subtitle}>Questa pagina non esiste!</h2>
        </Layout>
    )
}

export default Page404
