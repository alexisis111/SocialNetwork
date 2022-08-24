import React from "react";
import DialogItem from "./dialogItem";
import c from './dialogs.module.css';
import Messages from './Messages';


const Dialogs = (props) => {
    let DialogElements = props.dialogs.map((d, id) => <DialogItem key={id} name={d.name} id={d.id} url={d.url} />);
    let MessageElements = props.messages.map((m, id) => <Messages key={id} messages={m.message} id={m.id} url={m.url} />);

    let newDialogElement = React.createRef();

    let onAddMessage = () => {
        props.addMessage()

    }

    let onMessageChange = (e) => {
        let text = e.target.value
        props.updateMessageText(text);

    }


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
