import React from 'react';
import c from './description.module.css';
import Preloader from "../../../common/preloader/preloader";
import usersPhoto from "../../../images/setImageUsers/users.png";


const Description = (props) => {
    if (!props.profile) return <Preloader />

    

    return (
        <>
            <div className={c.description}>
                <div>
                    {props.profile.photos.small === null ? <img src={usersPhoto} alt="" /> : <img src={props.profile.photos.small} alt="" />}
                </div>
                <div className={c.descriptionInfo}>
                    <h3>{props.profile.fullName}</h3>
                    <p>{props.profile.aboutMe}</p>
                    <h3>Контакты</h3>
                    <p>{props.profile.contacts.github}</p>
                    <p>{props.profile.contacts.facebook}</p>
                </div>
            </div>
        </>
    );
}

export default Description;
