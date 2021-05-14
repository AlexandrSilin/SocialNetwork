import React from 'react'
import classes from './Profile.module.css'
import ProfileInfo from "./profileInfo/ProfileInfo";
import NewPostContainer from "./post/newPost/NewPostContainer";
import MyPostContainer from "./post/myPost/MyPostContainer";
import {Loader} from "../loader/Loader";

const Profile = (props) => {
    if (!props.profile)
        return <Loader/>
    return <div className={classes.content}>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <NewPostContainer store={props.store}/>
        <MyPostContainer store={props.store}/>
    </div>
}

export default Profile;