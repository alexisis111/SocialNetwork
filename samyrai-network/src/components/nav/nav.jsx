import React from 'react';
import c from './nav.module.css';
import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <nav className={c.nav }>
           <div><Link to='/profile' className={c.active}>Profile</Link></div> 
            <div><Link to='/dialogs'>Messages</Link></div>
            <div><Link to='/music'>Music</Link></div>
            <div><Link to='/settings'>Settings</Link></div>
        </nav>
    );
}

export default Nav;
