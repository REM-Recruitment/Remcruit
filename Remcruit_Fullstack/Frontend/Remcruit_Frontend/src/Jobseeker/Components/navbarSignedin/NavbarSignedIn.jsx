import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../../assets/fullLogo-cropped.svg'

import './navbarSignedIn.css'
import AuthContext from '../../../context/AuthContext'

function NavbarSignedIn() {
    let {logoutUser} = useContext(AuthContext)
    return (
        <div className='n'>
            <nav className='employerNav'>
                <img src={Logo} alt="" srcset="" className='empLogo' />
                <ul className='navMenu'>
                    <li><Link to='/home' >Home</Link></li>
                    <li><Link to='/' >landing</Link></li>
                    <li><Link to='#' >Find Jobs</Link></li>
                    <li><Link to='#' >Notifications</Link></li>
                    <li onClick={logoutUser}>Logout</li>
                    {/* <li><Link to='/employer/register' >Register</Link></li> */}
                    {/* <li><Link to='#' >Pricing</Link></li> */}
                    {/* <button className='postBtn'>Post A Job</button> */}
                </ul>
            </nav>
        </div>
    )
}

export default NavbarSignedIn