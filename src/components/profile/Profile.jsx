import React from 'react'
import classes from './Profile.module.css'

import MyPost from './post/myPost/MyPost'
import NewPost from './post/newPost/NewPost'
import ProfileInfo from "./profileInfo/ProfileInfo";
import NewPostContainer from "./post/newPost/NewPostContainer";

const Profile = (props) => {
    debugger;
    return <div className={classes.content}>
        <ProfileInfo
            pic='https://s1.1zoom.ru/big0/596/Evening_Forests_Mountains_Firewatch_Campo_Santo_549147_1280x720.jpg'
            desc='Info'/>
        <NewPostContainer store={props.store} />
        <MyPost posts={props.store.getState().profileReducer.posts}/>
    </div>
}

export default Profile;