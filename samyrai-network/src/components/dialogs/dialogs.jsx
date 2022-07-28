import React from "react";
import c from './dialogs.module.css';
function Dialogs() {
    return (
        <div >
            <div className={c.dialogs}>
                <div className={c.dialogs_items}>
                    <div className={c.dialog + ' ' + c.active}>Sveta</div>
                    <div className={c.dialog}>Sasha</div>
                    <div className={c.dialog}>kolya</div>
                    <div className={c.dialog}>Greg</div>
                    <div className={c.dialog}>Pit</div>
                    <div className={c.dialog}>Vova</div>
                </div>
                <div className={c.messages}>
                    <div className={c.message}>Hi</div>
                    <div className={c.message}>Yo</div>
                    <div className={c.message}>Wow</div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;