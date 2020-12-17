import React from 'react'
import Layout from '../components/layout'
import pedigreeStyles from './pedigree.module.scss'


function Pedigree() {
    return (
        <Layout>
            <div className={pedigreeStyles.pedigree}>
                <h1 className={pedigreeStyles.pedigree__title}>
                    Pedigree
                </h1>
                <div className={pedigreeStyles.pedigree__text}>
                    <p>
                        Il <span>Pedigree</span> non è un optional ma è elemento fondamentale per essere certi di avere un cane di razza : dietro a questo documento c’è il lavoro dell’ ENCI (l’Ente Nazionale della Cinofilia Italiana) e <span>il lavoro degli allevatori che selezionano coscienziosamente le caratteristiche dei riproduttori</span> per avere i migliori cuccioli possibili.
                    </p>
                    <p>
                        <span>Cani di “razza” ma senza Pedigree non esistono</span>: sono di fatto meticci e purtroppo sono la merce di trafficanti senza arte né parte. Non amano i loro cani, ma li sfruttano, non sanno nulla di riproduzione, di alimentazione, di assistenza veterinaria, di comportamento, di gestione dei cuccioli: altrimenti studierebbero per loro , li alimenterebbero con cibo di massima qualità, seguirebbero le direttive ENCI.  <span>Se il cane è di razza deve avere un Pedigree rilasciato da ENCI</span>, altrimenti non lo è.
                    </p>
                    <p>
                        <span>Se dovete proprio adottare un cane senza Pedigree piuttosto cercatelo in canile o in rifugio</span>: farete un’opera di bene per una creatura e non fomenterete i traffici di persone senza preparazione , che speculano sulla buona fede delle persone e sulla vita di esseri innocenti.
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Pedigree
