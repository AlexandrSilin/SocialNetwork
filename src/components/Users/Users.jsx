import React from "react";
import classes from './Users.module.css'

let Users = (props) => {
    return <div>
        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img className={classes.ava}
                             src={user.ava === '' ? "https://www.meme-arsenal.com/memes/d9250ee29a5b10f34469acc3b4186a46.jpg" : user.ava}/>
                    </div>
                    <div>
                        <button onClick={user.followed ? () => {
                            props.unfollow(user.id)
                        } : () => {
                            props.follow(user.id)
                        }}>{user.followed ? "Unfollow" : "Follow"}</button>
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {user.fullName}
                        </div>
                        <div>
                            {user.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {user.location.country}
                        </div>
                        <div>
                            {user.location.city}
                        </div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;