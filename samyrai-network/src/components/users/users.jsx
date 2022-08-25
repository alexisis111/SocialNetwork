import React from 'react';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                { id: 1, photoUrl: 'https://sun9-east.userapi.com/sun9-30/s/v1/ig2/eTPDhBXPqZlXmVEBLEBeFiOFSsbsODeL0uQ83-SrQ9KomSZukCmWjvU7sMv1aRkgXuWmnS8M5HwlFXpy_ccCp8fo.jpg?size=200x200&quality=95&crop=166,128,404,404&ava=1', followed: 'true', fullname: 'Andrew', location: { city: 'SPB', countries: 'Russia' } },
                { id: 2, photoUrl: 'https://sun9-east.userapi.com/sun9-30/s/v1/ig2/eTPDhBXPqZlXmVEBLEBeFiOFSsbsODeL0uQ83-SrQ9KomSZukCmWjvU7sMv1aRkgXuWmnS8M5HwlFXpy_ccCp8fo.jpg?size=200x200&quality=95&crop=166,128,404,404&ava=1', followed: 'false', fullname: 'Goga', location: { city: 'MSK', countries: 'Russia' } },
                { id: 3, photoUrl: 'https://sun9-east.userapi.com/sun9-30/s/v1/ig2/eTPDhBXPqZlXmVEBLEBeFiOFSsbsODeL0uQ83-SrQ9KomSZukCmWjvU7sMv1aRkgXuWmnS8M5HwlFXpy_ccCp8fo.jpg?size=200x200&quality=95&crop=166,128,404,404&ava=1', followed: 'true', fullname: 'Koka', location: { city: 'VBG', countries: 'Russia' } }
            ]
        )
    }

    return <div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} alt={u.id} />
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => { props.unFollow(u.id) }}>unfollow</button>
                        : <button onClick={() => { props.follow(u.id) }}>follow</button>
                    }
                </div>
            </span>
            <span>
                <div>{u.fullname}</div>
                <div>{u.city}</div>
            </span>

        </div>)}
    </div>


}

export default Users;
