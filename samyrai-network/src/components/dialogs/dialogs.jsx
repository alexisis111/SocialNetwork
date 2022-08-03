import React from "react";
import c from './dialogs.module.css';
import { NavLink } from "react-router-dom";


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

const Messages = (props) => {

    return <div className={c.message}>
        <img src={props.url} alt="" />
        {props.messages}
        
    </div>
}

const SendMessages  = () => {
    let newDialogElement = React.createRef();

    let addMessage = () => {
        let text = newDialogElement.current.value
        alert(text)
    }


    return <div>
        <textarea ref={newDialogElement}></textarea>
        <button onClick={addMessage}>Send message</button>
    </div>
}





function Dialogs(props) {

    let DialogElements = props.appState.dialogs.map((d, id) => <DialogItem key={id} name={d.name} id={d.id} url={d.url} />);
    let MessageElements = props.appState.messages.map((m, id) => <Messages key={id} messages={m.message} id={m.id} url={m.url} />);

    return (
        <div >
            <div className={c.dialogs}>
                <div className={c.dialogs_items}>
                    {DialogElements}
                </div>
                <div className={c.messages}>
                    {MessageElements}
                    <SendMessages />
                </div>
                
            </div>
        </div>
    );
}

export default Dialogs;