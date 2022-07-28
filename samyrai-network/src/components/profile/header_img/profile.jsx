import React from 'react';
import Description from '../description/description';
import Posts from '../posts/posts';
import c from './profile.module.css';
const Profile = () => {
    return (
        <div>
            <img className={c.profile_img}
                src="https://guruturizma.ru/wp-content/uploads/2015/05/%D0%93%D1%80%D0%B0%D0%BD%D0%B4-%D0%9A%D0%B0%D0%BD%D1%8C%D0%BE%D0%BD-%D0%A1%D0%A8%D0%9013-1024x683.jpg"
                alt=""/>
            <Description/>
            <Posts />
        </div>
    );
}

export default Profile;
