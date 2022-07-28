import React from 'react';
import c from './header.module.css';
const Header = () => {
    return (
        <header className={c.header}>
            <div className={c.header_img}>
                <img src="https://e7.pngegg.com/pngimages/41/701/png-clipart-logo-graphic-design-graphy-grapher-logo-graphy-angle-text.png" alt="LOGO" width='60px' />
            </div>
        </header>
    );
}

export default Header;
