import React from "react";
import { addMessageActionCreator, onMessageChangeActionCreator } from "../../redux/reducer/dialogsPageReducer"

const InputMessageUpdate = (props) => {

    let newDialogElement = React.createRef();

    let addMessage = () => {
        //props.addMessage()
        props.dispatch(addMessageActionCreator())

    }

    let onMessageChange = (e) => {
        let text = e.target.value
        let action = onMessageChangeActionCreator(text)
        props.dispatch(action)

    }


    return (
        <div>
            <textarea
                onChange={onMessageChange}
                ref={newDialogElement}
                value={props.newMessageText}>
            </textarea>
            <div>
                <button onClick={addMessage}>Send message</button>
            </div>
        </div>
    )
}

export default InputMessageUpdate;
