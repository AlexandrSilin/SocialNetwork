import React from 'react'
import classes from './MyPost.module.css'

import Post from '../Post'

const MyPost = () => {
    return <div className={classes.myPost}>
        My posts
        <Post message="Post 1" likes={1}/>
        <div>
            <Post message="Post 2" likes={3}/>
        </div>
    </div>
}

export default MyPost;