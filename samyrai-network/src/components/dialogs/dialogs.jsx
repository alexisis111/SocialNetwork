import React from "react";
import c from './dialogs.module.css';
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    const ActiveLink = ({ isActive }) => isActive ? c.active : c.item;

    return (
        <div>
            <NavLink to={path} className={ActiveLink}>{props.name}</NavLink>
        </div>
    )
}

const Messages = (props) => {
    return <div className={c.message}>{props.messages}</div>
}


function Dialogs(props) {

    let DialogEements = props.appState.dialogs.map((d, id) => <DialogItem key={id} name={d.name} id={d.id} />);
    let MessageElements = props.appState.messages.map((m, id) => <Messages key={id} messages={m.message} />);

    return (
        <div >
            <div className={c.dialogs}>
                <div className={c.dialogs_items}>
                    {DialogEements}
                </div>
                <div className={c.messages}>
                    {MessageElements}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;