import React from 'react'
import classes from './NewPost.module.css'

const NewPost = () => {
    return <div className={classes.newPost}>
        <textarea/>
        <div>
            <button className={classes.button}>Add post</button>
        </div>
    </div>
}

export default NewPost;