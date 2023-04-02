import React from 'react';
import c from './nav.module.css';
import { NavLink } from "react-router-dom";

const Nav = (props) => {

    const ActiveLink = ({ isActive }) => isActive ? c.active : c.item;

    let linksElements = props.sidebar.link.map((l, id) => <div key={id}><NavLink to={l.to} className={ActiveLink}>{l.link}</NavLink ></div>)
    return (
        <nav className={c.nav}>
            {linksElements}
        </nav>
    );
}

export default Nav;
