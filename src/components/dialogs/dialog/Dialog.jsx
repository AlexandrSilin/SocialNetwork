import React from "react";
import {NavLink} from "react-router-dom";
import classes from "../Dialogs.module.css";

const Dialog = (props) => {
    return <div>
        <NavLink className={classes.dialogs} activeClassName={classes.active}
                 to={"/messages/" + props.id}>{props.name}</NavLink>
    </div>
}

export default Dialog
