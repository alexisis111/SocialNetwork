import React from "react";


const InputMessageUpdate = (props) => {

    let newDialogElement = React.createRef();

    let addMessage = () => {
        props.addMessage()

    }

    let onMessageChange = () => {
        let text = newDialogElement.current.value
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
                <button onClick={addMessage}>Send message</button>
            </div>
        </div>
    )
}

export default InputMessageUpdate;
