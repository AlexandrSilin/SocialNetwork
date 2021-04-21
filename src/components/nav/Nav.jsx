import React from 'react'
import classes from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
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
    </nav>
}

export default Nav;