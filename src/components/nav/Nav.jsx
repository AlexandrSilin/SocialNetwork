import React from 'react'
import classes from './Nav.module.css'
import {NavLink} from "react-router-dom";
import Friend from "../friends/Friend";

const Nav = (props) => {
    let friends = props.siteBar.friends.map(friend => <Friend name={friend.name} ava={friend.ava}/>)
    return <nav className={classes.nav}>
        <div>
            <NavLink className={classes.item} activeClassName={classes.active} to='/profile'>Profile</NavLink>
        </div>
        <div>
            <NavLink className={classes.item} activeClassName={classes.active} to='/messages'>Messages</NavLink>
        </div>
        <div>
            <NavLink className={classes.item} activeClassName={classes.active} to='/news'>News</NavLink>
        </div>
        <div>
            <NavLink className={classes.item} activeClassName={classes.active} to='/music'>Music</NavLink>
        </div>
        <div>
            <NavLink className={classes.item} activeClassName={classes.active} to='/settings'>Settings</NavLink>
        </div>
        <div className={classes.item}>
            <h3> Friends </h3>
            <div className={classes.friend}>
                {friends}
            </div>
        </div>
    </nav>
}

export default Nav;