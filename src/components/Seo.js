import * as React from 'react'
import {Helmet} from 'react-helmet'

const Seo = ({title='Kryptokrona'}) => {
    return (
        <Helmet htmlAttributes>
            <html lang="en"/>
            <title>{title}</title>
            <meta name="Kryptokrona" content="Kryptokrona"/>
            <meta name="description" content="Kryptokrona exists to secure and simplify our future economic system. Sending and receiving money should not be expensive or slow. We work with open source code that allows you to be involved and improve the money of the future."/>
            <meta name="theme-color" content="#1d1d1d"/>
            <meta name="robots" content="index, follow"/>
            <link rel="icon" src="../images/favicon.ico" type="image/x-icon"/>
            <script defer data-domain="kryptokrona.org" src="https://plausible.io/js/plausible.js"/>
            <meta property="og:image" content="https://user-images.githubusercontent.com/36674091/148423512-2c019bd6-6b32-45ce-b380-100632b00f0f.png" />
        </Helmet>
    )
}

export default Seo