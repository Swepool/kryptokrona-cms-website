import * as React from 'react'
import { useState } from 'react';
import Navbar from "./navbar/Navbar";
import Sidebar from "./navbar/Sidebar";
import Footer from './footer/Footer'
import Contribute from "./footer/Contribute";

import '../theme/animations.css'
import '../theme/fonts.css'


const Home = ( { children, pageTitle, pageDescription } ) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Navbar toggle={toggle} />
                {children}
                <Contribute/>
                <Footer/>
        </>
    );
}

export default Home;