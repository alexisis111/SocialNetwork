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

let DialogData = [
    { id: 1, name: "Sveta" },
    { id: 2, name: "Sasha" },
    { id: 3, name: "Pasha" },
    { id: 4, name: "Igor" },
    { id: 5, name: "Goga" },
    { id: 6, name: "Lara" }
]

let MessageData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Yo" },
    { id: 3, message: "Wow" },
    { id: 3, message: "Wow" },
    { id: 3, message: "Wow" },
    { id: 3, message: "Wow" },
    { id: 3, message: "Wow" }
]

let DialogEements = DialogData.map( (d, id) => <DialogItem key={id} name={d.name} id={d.id} />);
let MessageElements = MessageData.map( (m, id)  => <Messages key={id} messages={m.message} />);


function Dialogs() {
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