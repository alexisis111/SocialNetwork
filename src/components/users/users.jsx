import React from 'react';
import axios from "axios";
import usersPhoto from '../../components/images/setImageUsers/users.png'

const Users = (props) => {
    debugger
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data)
            });
    }
    debugger
    return <>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photo !== undefined
                            ? u.photo
                            : usersPhoto} alt={u.id} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unFollow(u.id)
                            }}>unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>follow</button>
                        }
                    </div>
                </span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.username}</div>
                </span>
            </div>)
        }
    </>


}

export default Users;
