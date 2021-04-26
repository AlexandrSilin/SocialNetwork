import React from 'react'
import classes from './NewPost.module.css'

const NewPost = (props) => {
    let newPostElement = React.createRef();

    return <div className={classes.newPost}>
        <textarea ref={newPostElement} value={props.newPostText}
                  onChange={() => props.dispatch({type: 'CHANGE-TEXT', value: newPostElement.current.value})}/>
        <div>
            <button className={classes.button}
                    onClick={() => props.dispatch({type: 'ADD-POST', value: ''})}>Add post
            </button>
        </div>
    </div>
}

export default NewPost;