import React from 'react';
import axios from "axios";
import usersPhoto from '../../components/images/setImageUsers/users.png'

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                props.setUsers(response.data)
            });
    }
    return <div>
        {props.users.map( u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photo !== undefined
                        ? u.photo
                        : usersPhoto} alt={u.id}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            debugger
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
                <div>{u.address.city}</div>
            </span>

        </div>)}
    </div>


}

export default Users;
