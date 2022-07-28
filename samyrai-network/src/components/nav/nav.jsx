import React from 'react';
import c from './nav.module.css';
import { NavLink } from "react-router-dom";
const Nav = () => {

    const ActiveLink = ({isActive}) => isActive ? c.active : c.item ;

    return (
        <nav className={c.nav}>
            <div ><NavLink to='/profile'className = {ActiveLink}>Profile</NavLink></div>
            <div><NavLink to='/dialogs' className = {ActiveLink}>Messages</NavLink></div>
            <div><NavLink to='/music' className = {ActiveLink}>Music</NavLink></div>
            <div><NavLink to='/settings' className = {ActiveLink}>Settings</NavLink></div>
        </nav>
    );
}

export default Nav;
