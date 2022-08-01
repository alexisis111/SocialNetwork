import React from 'react';
import Description from './profileInfo/description/description';
import ProfileImg from "./profileInfo/profileImg/profileImg";
import Posts from './posts/posts';



const Profile = (props) => {
    return (
        <div>
            <ProfileImg />
            <Description />
            <Posts posts={props.appState.posts} />
        </div>
    );
}

export default Profile;
