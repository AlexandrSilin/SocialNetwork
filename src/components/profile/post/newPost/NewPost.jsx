import React from 'react'
import classes from './NewPost.module.css'
import {addPostActionCreator, changeTextActionCreator} from "../../../../redux/state";

const NewPost = (props) => {
    let newPostElement = React.createRef();

    return <div className={classes.newPost}>
        <textarea ref={newPostElement} value={props.newPostText}
                  onChange={() => props.dispatch(changeTextActionCreator(newPostElement.current.value))}/>
        <div>
            <button className={classes.button}
                    onClick={() => props.dispatch(addPostActionCreator())}>Add post
            </button>
        </div>
    </div>
}

export default NewPost;