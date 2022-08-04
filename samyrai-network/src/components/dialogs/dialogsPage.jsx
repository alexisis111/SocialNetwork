import React from "react";
import DialogItem from "./dialogItem";
import c from './dialogs.module.css';

import InputMessageUpdate from "./inputMessageUpdate";
import Messages from "./Messages";


function DialogsPage(props) {

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
                    <InputMessageUpdate addMessage={props.addMessage} updateMessageText={props.updateMessageText} />
                </div>
                
            </div>
        </div>
    );
}

export default DialogsPage;