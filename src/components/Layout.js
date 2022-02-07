import * as React from 'react'
import { useState } from 'react';
import Navbar from "./navbar/Navbar";
import Sidebar from "./navbar/Sidebar";
import Footer from './footer/Footer'
import Seo from "./Seo";
import Contribute from "./footer/Contribute";

import '../theme/animations.css'
import '../theme/fonts.css'
import AlertBanner from "./AlertBanner";


const Home = ( { children, pageTitle } ) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
                <Seo title={pageTitle}/>
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Navbar toggle={toggle} />
                <AlertBanner text="This site is under construction" emoji="🤙"/>
                {children}
                <Contribute/>
                <Footer/>
        </>
    );
}

export default Home;