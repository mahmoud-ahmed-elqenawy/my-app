import './header.styles.scss'
import React from 'react';
import { Link } from 'react-router-dom'
import {ReactComponent as MyLogo} from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
    <>
        <div className="header">
            <Link className="logo-container" to="/">
                <MyLogo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/">Home</Link>
                <Link className="option" to="/shop">Shop Page</Link>
                <Link className="option" to="/contact">Contact</Link>
                {
                    currentUser ? 
                        <Link className="option" to="" onClick={() => auth.signOut()} >Sign out</Link>
                    : 
                        <Link className="option" to="/signin">Sign In</Link>
                }
            </div>
        </div>
    </>
)

export default Header;