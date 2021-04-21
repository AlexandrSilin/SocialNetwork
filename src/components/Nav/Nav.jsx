import React from 'react'
import classes from './Nav.module.css'

const Nav = () => {
    return <nav className={classes.nav}>
        <div>
            <a className={classes.item} href='#s'>Profile</a>
        </div>
        <div>
            <a className={classes.item} href='#s'>Messages</a>
        </div>
        <div>
            <a className={classes.item} href='#s'>News</a>
        </div>
        <div>
            <a className={classes.item} href='#s'>Music</a>
        </div>
        <div>
            <a className={classes.item} href='#s'>Settings</a>
        </div>
    </nav>
}

export default Nav;