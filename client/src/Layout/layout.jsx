import { Outlet, Link } from "react-router-dom";

import React from 'react';

import Navbar from './Navigation/navbar';
import Footer from './Footer/footer';

import './layout.css';

function Layout () {
    
        return (
            <div className='Layout'>
               
               <Navbar/>

<div className="outlet">
    <Outlet />
</div>
               

                <Footer/>
               
            </div>
        );
    
}

export default Layout;
