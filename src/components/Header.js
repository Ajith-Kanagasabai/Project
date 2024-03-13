import React from 'react';
import Logo from './assets/Logo.png'
import { CgProfile } from "react-icons/cg";
import { TfiPencilAlt } from "react-icons/tfi";
import { Link } from 'react-router-dom';

function Header() {
    
    return (
        
        <div className='container'>

            <div className='logo'>
            <Link to="/"> 
                <img src={Logo} alt="Logo" />
                </Link>
            </div>

            <div className='menu-bar'>
                <ul>
                    <li> <Link to="/"> HOME</Link> </li>
                    <li> <Link to="/Candidate"> CANDIDATE </Link> </li>
                    <li> <Link to="/Whatwedo"> WHAT WE DO </Link> </li>
                    <li> <Link to="/Client"> CLIENTS </Link> </li>
                    <li> <Link to="/Blog"> BLOG </Link> </li>
                    <li> <Link to="/Contact"> CONTACT </Link> </li>
                </ul>
            </div>
            <div className='login-register'>
                <Link to="/login"><CgProfile /> LOG IN </Link>
                <Link to="/register"><TfiPencilAlt /> REGISTER </Link>
            </div>

        </div>
    )
}

export default Header