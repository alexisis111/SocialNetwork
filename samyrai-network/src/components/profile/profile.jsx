import React from 'react';
import Description from './profileInfo/description/description';
import ProfileImg from "./profileInfo/profileImg/profileImg";
import Posts from './posts/posts';



const Profile = (props) => {
   
    return (
        <div>
            <ProfileImg />
            <Description profileImg={props.appState.profileImg[0]} />
            <Posts posts={props.appState.posts} addPost={props.addPost}/>
        </div>
    );
}

export default Profile;
