import React from 'react'
import classes from './Profile.module.css'

import MyPost from './post/myPost/MyPost'
import NewPost from './post/newPost/NewPost'

const Profile = () => {
    return <div className={classes.content}>
        <div>
            <img src='https://s1.1zoom.ru/big0/596/Evening_Forests_Mountains_Firewatch_Campo_Santo_549147_1280x720.jpg'></img>
        </div>
        <div>ava + desc</div>
        <NewPost/>
        <MyPost/>
    </div>
}

export default Profile;