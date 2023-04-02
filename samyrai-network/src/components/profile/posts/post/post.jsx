import React from 'react';
import c from './post.module.css';




const Post = (props) => {
    return (<div className={c.item}>
        {props.posts.map((p) => <div key={p.id}>{p.message}</div>).reverse()}
    </div>
    );
}

export default Post;
