import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
    return <div className={classes.post}>
        <img src='https://www.meme-arsenal.com/memes/d9250ee29a5b10f34469acc3b4186a46.jpg'/>
        {props.message}
        <div>
            <span>likes {props.likes}</span>
        </div>
    </div>
}

export default Post;