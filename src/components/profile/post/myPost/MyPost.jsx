import React from 'react'
import classes from './MyPost.module.css'

import Post from '../Post'

const MyPost = (props) => {
    return <div className={classes.myPost}>
        <h2>My posts</h2>
        {props.posts.map(post => <Post message={post.message} likes={post.likes}/>)}
    </div>
}

export default MyPost;