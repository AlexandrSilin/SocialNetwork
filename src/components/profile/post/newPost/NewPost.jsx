import React from 'react'
import classes from './NewPost.module.css'
import {Field, reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";

const NewPost = (props) => {
    if (!props.isAuth)
        return <Redirect to={'login'}/>
    return (
        <div className={classes.newPost}>
            <AddPostFormRedux onSubmit={(values) => props.addPost(values.postText)}/>
        </div>)
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="postText" placeholder="New post"/>
            </div>
            <div>
                <button className={classes.button}>Add post</button>
            </div>
        </form>)
}

const AddPostFormRedux = reduxForm({form: "AddPostForm"})(AddPostForm)

export default NewPost;