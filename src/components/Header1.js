import React from 'react';
import Logo from './assets/Logo.png'
import { Link } from 'react-router-dom';

function Header1() {

    return (

        <div className='header1'>

            <div className='logo1'>
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
            </div>

            <div className='menu-bar1'>
                <ul>
                    <li> <Link to="/"> HOME</Link> </li>
                    <li> <Link to="/Candidate"> CANDIDATE </Link> </li>
                    <li> <Link to="/Whatwedo"> WHAT WE DO </Link> </li>
                    <li> <Link to="/Client"> CLIENTS </Link> </li>
                    <li> <Link to="/Blog"> BLOG </Link> </li>
                    <li> <Link to="/Contact"> CONTACT </Link> </li>
                </ul>
            </div>

        </div>
    )
}

export default Header1