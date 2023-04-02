import React from "react";
import { Navigate } from "react-router-dom";
import DialogItem from "./dialogItem";
import c from './dialogs.module.css';
import Messages from './Messages';


const Dialogs = (props) => {
    let DialogElements = props.dialogs.map((d) => <DialogItem key={d.id} name={d.name} url={d.url} />);
    let MessageElements = props.messages.map((m) => <Messages key={m.id} messages={m.message} url={m.url} />);

    let newDialogElement = React.createRef();

    let onAddMessage = () => {
        props.addMessage()

    }

    let onMessageChange = (e) => {
        let text = e.target.value
        props.updateMessageText(text);

    }

    if (!props.isAuth) return <Navigate to={'/login'} />


    return (
        <>
            <div className={c.dialogs}>
                <div className={c.dialogs_items}>
                    {DialogElements}
                </div>
                <div className={c.messages}>
                    {MessageElements}
                    <div>
                        <textarea
                            onChange={onMessageChange}
                            ref={newDialogElement}
                            value={props.newMessageText}>
                        </textarea>
                        <div>
                            <button onClick={onAddMessage}>Send message</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dialogs;
