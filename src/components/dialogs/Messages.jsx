import React from 'react';
import c from './dialogs.module.css';
const Messages = (props) => {

    return <div className={c.message}>
        <img src={props.url} alt="" />
        {props.messages}

    </div>
}

export default Messages;
