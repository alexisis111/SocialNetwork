import React from 'react';
import axios from "axios";
import Profile from "./profile";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/reducer/profilePageReducer";
import { useEffect } from 'react';
import { withAuthRedirect } from '../hoc/withAuthRedirect';


const My = (props) => {
    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/26588')
            .then(response => { props.setUserProfile(response.data) });
    }, [])
    return (
        <Profile {...props} />
    );
}



const mapStateToProps = state => ({
    profile: state.profilePage.profile,
})

export default withAuthRedirect(connect(mapStateToProps, { setUserProfile })(My)
) 