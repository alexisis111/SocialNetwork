import React from 'react';
import Description from './profileInfo/description/description';
import ProfileImg from "./profileInfo/profileImg/profileImg";
import PostsContainer from './posts/postsContainer';



const Profile = (props) => {
    return (
        <div>
            <ProfileImg />
            <Description store={props.store}/>
            <PostsContainer store={props.store} />
        </div>
    );
}

export default Profile;
