import React from "react";
import classes from "./Users.module.css";
import ava from "../../assets/ava.jpg";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    debugger
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
                        <button disabled={props.isFollowing.some(id => id === user.id)}
                                onClick={() => user.followed ? props.unFollowUser(user.id) :
                                    props.followUser(user.id)}>{user.followed ? "Follow" : "Unfollow"}</button>
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
                        props.getUsers(page, props.pageSize);
                    }}
                          className={props.currentPage === page ? classes.currentPage : classes.item}>{page}
                            </span>)
            })}
        </div>
    </div>
}

export default Users