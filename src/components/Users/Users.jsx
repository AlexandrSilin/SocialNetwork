import React from "react";
import classes from "./Users.module.css";
import ava from "../../assets/ava.jpg";
import {NavLink} from "react-router-dom";
import {follow, unfollow} from "../../api/api";

let Users = (props) => {
    return <div>
        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img className={classes.ava}
                                 src={user.photos.small === null ? ava : user.photos.small}/>
                        </NavLink>
                    </div>
                    <div>
                        <button
                            disabled={props.isFollowing.some(id => id === user.id)}
                            onClick={user.followed ? () => {
                                props.toggleIsFollowing(true, user.id);
                                unfollow(user.id)
                                    .then(response => {
                                        props.toggleIsFollowing(user.id);
                                        if (response.data.resultCode === 0)
                                            props.unfollow(false, user.id)
                                    })
                            } : () => {
                                props.toggleIsFollowing(user.id);
                                follow(user.id)
                                    .then(response => {
                                        props.toggleIsFollowing(true, user.id);
                                        if (response.data.resultCode === 0)
                                            props.follow(false, user.id)
                                    })
                            }}>
                            {user.followed ? "Unfollow" : "Follow"}
                        </button>
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {user.name}
                        </div>
                        <div>
                            {user.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            user.location.country
                        </div>
                        <div>
                            user.location.city
                        </div>
                    </span>
                </span>
            </div>)
        }
        <div>
            {props.getPages().map(page => {
                return (
                    <span onClick={() => {
                        props.setCurrentPage(page);
                        props.getUsers(page);
                    }}
                          className={props.currentPage === page ? classes.currentPage : classes.item}>{page}
                            </span>)
            })}
        </div>
    </div>
}

export default Users