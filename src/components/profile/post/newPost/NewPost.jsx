import React from 'react'
import classes from './NewPost.module.css'
import {Field, reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";
import {maxLengthCreator, minLengthCreator, requiredField} from "../../../../utils/validators/validators";
import {Textarea} from "../../../formsControls/formsControls";

const maxLength = maxLengthCreator(50);
const minLength = minLengthCreator(10);

const NewPost = (props) => {
    return !props.isAuth ? <Redirect to={'login'}/> :(
        <div className={classes.newPost}>
            <AddPostFormRedux onSubmit={(values) => props.addPost(values.postText)}/>
        </div>)
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="postText" placeholder="New post"
                       validate={[requiredField, maxLength, minLength]}/>
            </div>
            <div>
                <button className={classes.button}>Add post</button>
            </div>
        </form>)
}

const AddPostFormRedux = reduxForm({form: "AddPostForm"})(AddPostForm)

export default NewPost;