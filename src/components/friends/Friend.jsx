import React from "react";
import classes from './Friends.module.css'

const Friend = (props) => {
    return <div className={classes.friend}>
        <div>
            <img src={props.ava}/>
            {props.name}
        </div>
    </div>
}

export default Friend