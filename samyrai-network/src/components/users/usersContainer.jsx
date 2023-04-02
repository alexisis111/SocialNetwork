import { connect } from 'react-redux';
import { useEffect } from 'react';
import {
    follow,
    unFollow,
    setCurrentPage,
    setFollowingProgress,
    getUsers
} from "../../redux/reducer/usersReducer";
import Users from "./users";
import React from "react";
import Preloader from "../common/preloader/preloader";
import { withAuthRedirect } from '../hoc/withAuthRedirect';

const userContainer = (props) => {
    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize)
    }, [])

    let onPageChange = (pageNumber) => {
        props.setCurrentPage(pageNumber)
        props.getUsers(pageNumber, props.pageSize)
    }

    return (
        <>
            {props.isFetching ? <Preloader /> : null}
            <Users {...props} onPageChange={onPageChange} />
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}



export default withAuthRedirect(connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    setFollowingProgress,
    getUsers
})(userContainer))
