import React from "react";
import classes from "./Users.module.css";
import ava from "../../assets/ava.jpg";

let Users = (props) => {
    return <div>
        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img className={classes.ava}
                             src={user.photos.small === null ? ava : user.photos.small}/>
                    </div>
                    <div>
                        <button onClick={user.followed ? () =>
                            props.unfollow(user.id) : () => props.follow(user.id)}>
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