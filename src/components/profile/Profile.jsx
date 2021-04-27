import React from 'react'
import classes from './Profile.module.css'
import ProfileInfo from "./profileInfo/ProfileInfo";
import NewPostContainer from "./post/newPost/NewPostContainer";
import MyPostContainer from "./post/myPost/MyPostContainer";

const Profile = (props) => {
    debugger;
    return <div className={classes.content}>
        <ProfileInfo
            pic='https://s1.1zoom.ru/big0/596/Evening_Forests_Mountains_Firewatch_Campo_Santo_549147_1280x720.jpg'
            desc='Info'/>
        <NewPostContainer store={props.store}/>
        <MyPostContainer store={props.store}/>
    </div>
}

export default Profile;