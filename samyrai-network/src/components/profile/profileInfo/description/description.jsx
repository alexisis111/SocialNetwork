import React from 'react';
import c from './description.module.css';
const Description = (props) => {
    debugger
    return (
        <div className={c.description}>
            <div>
                <img src={props.profileImg.url} alt="" />
            </div>
            <div className={c.descriptionInfo}>
                <h3>Alex Gilev</h3>
                <p>Date of birth : 17.10.1991</p>
                <p>City : Gnch</p>
                <p>Education : School</p>
            </div>
        </div>
    );
}

export default Description;
