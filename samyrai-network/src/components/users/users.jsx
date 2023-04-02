import React from "react";
import c from "./users.module.css";
import usersPhoto from "../images/setImageUsers/users.png";
import { NavLink } from "react-router-dom";




const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    return <>
        {
            pages.map(p => {
                return <span key={p.id} className={props.currentPage === p ? c.selected : ''}
                    onClick={(e) => {
                        props.onPageChange(p)
                    }}>{p}</span>
            })
        }

        {props.users.map(u =>
            <div key={u.id}>
                <span>
                    <NavLink key={u.id} to={'/profile/' + u.id}>
                        <img key={u.id} src={u.photos.small !== null ? u.photos.small : usersPhoto} alt='' />
                    </NavLink>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unFollow(u.id)
                            }}>unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id)
                            }}>follow</button>}
                    </div>
                </span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.photos.small}</div>
                </span>
            </div>
        )
        }
    </>
}
export default Users