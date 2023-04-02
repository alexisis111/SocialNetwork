import { connect } from 'react-redux';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unFollow,
    setToggleIsFetching
} from "../../redux/reducer/usersReducer";
import axios from "axios";
import Users from "./users";
import React, { Component } from "react";
import Preloader from "../common/preloader/preloader";

class UsersContainer extends Component {

    componentDidMount() {
        this.props.setToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);

            });
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleIsFetching(false)
                this.props.setUsers(response.data.items)
            });
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users {...this.props} />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unFollow: (userId) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAc(totalCount))
//         },
//         setToggleIsFetching: (isFetching) => {
//             dispatch(setToggleIsFetchingAc(isFetching))
//         }
//
//     }
// }

export default connect(mapStateToProps,
    {
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        setToggleIsFetching
    })(UsersContainer)


