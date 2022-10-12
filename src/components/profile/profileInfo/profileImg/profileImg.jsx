import React from 'react';
import 
c from './profileImg.module.css';

const ProfileImg = () => {
    return (
        <div>
            <img className={c.profile_img}
                src="https://i.gifer.com/90Ls.gif"
                alt="" />
        </div>
    );
}

export default ProfileImg;
