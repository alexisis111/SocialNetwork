import React from "react";
import c from './dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div>
            <NavLink to={path} className={c.dialog + ' ' + c.active}>{props.name}</NavLink>
        </div>
    )
}

const Messages = (props) => {
    return <div className={c.message}>{props.messages}</div>
}


function Dialogs() {
    return (
        <div >
            <div className={c.dialogs}>
                <div className={c.dialogs_items}>
                    <DialogItem name='Sveta' id='1' />
                    <DialogItem name='Sasha' id='2' />
                    <DialogItem name='Pasha' id='3' />
                    <DialogItem name='Igor' id='4' />
                    <DialogItem name='Goga' id='5' />
                    <DialogItem name='Lara' id='6' />

                </div>
                <div className={c.messages}>
                    <Messages messages='Hi' />
                    <Messages messages='Yo' />
                    <Messages messages='Wow' />

                </div>
            </div>
        </div>
    );
}

export default Dialogs;