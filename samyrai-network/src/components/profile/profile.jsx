import React from 'react';
import Description from './profileInfo/description/description';
import ProfileImg from "./profileInfo/profileImg/profileImg";
import Posts from './posts/posts';



const Profile = () => {
    return (
        <div>
            <ProfileImg />
            <Description />
            <Posts />
        </div>
    );
}

export default Profile;
