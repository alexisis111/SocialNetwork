import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './header.module.css';
const Header = (props) => {
    return (
        <header className={c.header}>
            <div className={c.header_img}>
                <img src="https://e7.pngegg.com/pngimages/41/701/png-clipart-logo-graphic-design-graphy-grapher-logo-graphy-angle-text.png" alt="LOGO" width='60px' />
                <div className={c.loginBlock}>
                    {props.isAuth ? <div className={c.authLogin}>login :{props.login}<br />user id :{props.id}<br />email :{props.email ? props.email : 'not of email'}</div> : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
        </header >
    );
}

export default Header;
