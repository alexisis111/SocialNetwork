import React from 'react';
import c from './nav.module.css';
import { NavLink } from "react-router-dom";
import StoreContext from '../../storeContext';
const Nav = () => {

   
    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState();

                    const ActiveLink = ({ isActive }) => isActive ? c.active : c.item;

                    let linksElements = state.sidebar.link.map((l, id) => <div key={id}><NavLink to={l.to} className={ActiveLink}>{l.link}</NavLink ></div>)
                

                    return <nav className={c.nav}>
                        {linksElements}
                    </nav>
                }
            }
        </StoreContext.Consumer>
    );
}

export default Nav;
