import React from 'react';
import c from './post.module.css';
const Post = (props) => {
    return (
        <div className={c.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6k6gfZDCQ2JPYstNyiwOTX_9W8NdMenQ6w&usqp=CAU" alt="" />
           {props.message}
            <div>
                <span>like{props.likesCount }</span>
            </div>
        </div>
    );
}

export default Post;
