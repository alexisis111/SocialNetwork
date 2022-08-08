import React from "react";


const InputMessageUpdate = (props) => {

    let newDialogElement = React.createRef();

    let addMessage = () => {
        //props.addMessage()
        props.dispatch({ type: 'ADD-MESSAGE' })

    }

    let onMessageChange = () => {
        let text = newDialogElement.current.value
        let action = { type: 'UPDATE-MESSAGE-TEXT', newText: text }
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
