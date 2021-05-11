import React from "react";
import classes from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
    return <div>
        <img className={classes.img} src={props.profile.photos.large}/>
        <div className={classes.description}>{props.profile.aboutMe}</div>
    </div>
}

export default ProfileInfo