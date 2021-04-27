import React from 'react'
import classes from './NewPost.module.css'

const NewPost = (props) => {
    let newPostElement = React.createRef();
    return <div className={classes.newPost}>
        <textarea ref={newPostElement} value={props.newPostText}
                  onChange={() => props.onChangeTextArea(newPostElement.current.value)}/>
        <div>
            <button className={classes.button}
                    onClick={() => props.addPost()}>Add post
            </button>
        </div>
    </div>
}

export default NewPost;