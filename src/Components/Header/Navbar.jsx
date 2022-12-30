import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FaVideo } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import { useContext } from 'react';
import { userContext } from '../Context/AuthContext';
import ConnectedUser from '../../Hook/ConnectedUser';
const Navbar = () => {
    const { LogOut } = useContext(userContext);
    const [dbuser] = ConnectedUser();
    const handleLogOut = () => {
        LogOut().then(() => { })
    }
    const nav = <>
        <li><Link to='/' className="text-orange-700 hover:text-orange-700 lg:text-3xl focus:outline-none focus:shadow-outline"><FaHome /></Link></li>
        <li><Link to='/media' className="text-orange-700 hover:text-orange-700 lg:text-3xl focus:outline-none focus:shadow-outline">  <FaVideo /></Link></li>
        <li><Link className="text-orange-700 hover:text-orange-700 lg:text-3xl focus:outline-none focus:shadow-outline">  <FaEnvelope /></Link></li>
        <li><Link to='/profile' className="text-orange-700 hover:text-orange-700 lg:text-3xl focus:outline-none focus:shadow-outline">  <FaInfoCircle /></Link></li>

    </>

    return (
        <>
            <div className="navbar bg-[#242526]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {nav}
                        </ul>
                    </div>

                    <div className='flex gap-2'>
                        <h1 className='btn rounded font-serif shadow-inner bg-orange-700 text-xl font-bold text-white'>GG</h1>
                        <input type="text" placeholder="Search Golden Glimmers" className="input w-full h-10 rounded-3xl bg-[#3a3b3c] max-w-xs" />
                    </div>


                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal flex justify-between w-96 px-1">
                        {nav}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/profile">
                        <div className="avatar-group -space-x-6">
                            <div className="avatar">
                                <div className="w-12">
                                    <img src={dbuser?.ProfilePhoto} alt="" />
                                </div>
                            </div>
                        </div>
                    </Link>
                    <button onClick={handleLogOut} className='btn bg-orange-600 rounded-3xl text-white'>LogOut</button>
                </div>
            </div>
        </>
    );
};

export default Navbar;