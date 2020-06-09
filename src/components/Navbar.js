import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = (props) => {
    return (
    <Fragment>
        <nav className="navbar">
            <ul>
                <li>
                    <Link to='/signup' className="action-cont">
                        <button className="signup-Btn action-Btn">Sign Up</button>
                    </Link>
                </li>
                <li>
                    <Link to='/signin' className="action-cont">
                        <button className="signin-Btn action-Btn">Sign In</button>
                    </Link>
                </li>
            </ul>
        </nav>
    </Fragment>
    )
}
 
export default Navbar;