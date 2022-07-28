import React from 'react';
import c from './nav.module.css';
const Nav = () => {
    return (
        <nav className={c.nav }>
            <div className={c.active}>Profile</div>
            <div>Messages</div>
            <div>Music</div>
            <div>Settings</div>
        </nav>
    );
}

export default Nav;
