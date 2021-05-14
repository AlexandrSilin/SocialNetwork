import React from "react";
import classes from "./ProfileInfo.module.css"
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    return <div>
        <img className={classes.img} src={props.profile.photos.large}/>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        <div className={classes.description}>{props.profile.aboutMe}</div>
    </div>
}

export default ProfileInfo