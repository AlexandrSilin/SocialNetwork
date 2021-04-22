import React from "react";
import classes from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
    return <div>
        <img className={classes.img} src={props.pic}/>
        <div className={classes.description}>{props.desc}</div>
    </div>
}

export default ProfileInfo