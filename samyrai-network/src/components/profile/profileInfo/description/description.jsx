import React from 'react';
import c from './description.module.css';
const Description = () => {

    return (
        <div className={c.description}>
            <div>
                <img src='https://sun9-west.userapi.com/sun9-8/s/v1/ig2/fvg1qRJlxX9y7AkO3d6ltEluiV4EK9gtS1Qoia2oqhEPog_lC95lsTw4vaqD_TYt2mkT63rLZBeN1wDvcCI3L-XY.jpg?size=200x200&quality=96&crop=2,2,534,534&ava=1' alt="" />
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
