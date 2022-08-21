import React from "react";


const InputMessageUpdate = (props) => {
    let newDialogElement = React.createRef();

    let onAddMessage = () => {
        props.addMessage()

    }

    let onMessageChange = (e) => {
        let text = e.target.value
        props.updateMessageText(text);

    }


    return (
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
    )
}

export default InputMessageUpdate;
