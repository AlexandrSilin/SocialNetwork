import React from 'react'
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={classes.header}>
        <img src='https://i.pinimg.com/236x/26/f0/db/26f0db155bf6a2508c52040084eba161.jpg'/>
        <div className={classes.loginBlock}>
            {props.isAuth ?
                <span className={classes.item}>
                        {props.login}
                    <button onClick={props.logout}>Logout</button>
                </span> :
                <NavLink className={classes.item} activeClassName={classes.active} to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;