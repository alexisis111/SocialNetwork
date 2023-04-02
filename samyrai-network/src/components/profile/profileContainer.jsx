import React from 'react';
import Profile from "./profile";
import { connect } from "react-redux";
import { getProfileThunk } from "../../redux/reducer/profilePageReducer";
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { withAuthRedirect } from '../hoc/withAuthRedirect';

const ProfileComponent = (props) => {
    const params = useParams()
    // на случай, если айдишник не пришёл
    if (!params.userId) {
        params.userId = '26588'
    }

    useEffect(() => {
        props.getProfileThunk(params.userId)
    }, [])
    return (
        <Profile {...props} userId={params.userId} />
    );
}



const mapStateToProps = state => ({
    profile: state.profilePage.profile,
})



export default withAuthRedirect(connect(mapStateToProps, { getProfileThunk })(ProfileComponent)) 