import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Header/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='lg:w-[50vw] md:w-[60vw] m-auto'><Outlet></Outlet></div>

            <Footer></Footer>
        </div>
    );
};

export default Main;