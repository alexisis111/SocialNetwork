import React from "react";
import DialogItem from "./dialogItem";
import c from './dialogs.module.css';

import InputMessageUpdate from "./inputMessageUpdate";
import Messages from "./Messages";
import { addMessageActionCreator, onMessageChangeActionCreator } from "../../redux/reducer/dialogsPageReducer"

function DialogsPage(props) {

    let state = props.store.getState();



    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())

    }

    let onMessageChange = (text) => {
        let action = onMessageChangeActionCreator(text)
        props.store.dispatch(action)

    }


    let DialogElements = state.dialogsPage.dialogs.map((d, id) => <DialogItem key={id} name={d.name} id={d.id} url={d.url} />);
    let MessageElements = state.dialogsPage.messages.map((m, id) => <Messages key={id} messages={m.message} id={m.id} url={m.url} />);


    return (
        <div >
            <div className={c.dialogs}>
                <div className={c.dialogs_items}>
                    {DialogElements}
                </div>
                <div className={c.messages}>
                    {MessageElements}
                    <InputMessageUpdate
                        updateMessageText={onMessageChange}
                        addMessage={addMessage}
                        dialogs={state.dialogsPage.dialogs}
                        newMessageText={state.dialogsPage.newMessageText} />
                </div>

            </div>
        </div>
    );
}

export default DialogsPage;