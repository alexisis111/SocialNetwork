import React from 'react';
import { NavLink } from "react-router-dom";
import c from './dialogs.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    const ActiveLink = ({ isActive }) => isActive ? c.active : c.item;

    return (
        <div>
            <NavLink to={path} className={ActiveLink}>
                <img src={props.url} alt="" />
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;
