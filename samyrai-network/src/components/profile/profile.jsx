import React from 'react';
import Description from './profileInfo/description/description';
import ProfileImg from "./profileInfo/profileImg/profileImg";
import PostsContainer from './posts/postsContainer';



const Profile = (props) => {
    return (
        <div>
            <ProfileImg />
            <Description {...props}/>
            <PostsContainer />
        </div>
    );
}

export default Profile;
