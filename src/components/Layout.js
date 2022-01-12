import * as React from 'react'
import { useState } from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "./Sidebar";
import Footer from './Footer'
import '../theme/style.css'
import Seo from "./Seo";
import Contribute from "./Contribute";


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
                {children}
                <Contribute/>
                <Footer/>
        </>
    );
}

export default Home;