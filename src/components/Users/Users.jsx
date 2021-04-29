import React from "react";
import classes from './Users.module.css';
import * as axios from 'axios';
import ava from "../../assets/ava.jpg";

class Users extends React.Component {

    getUsers = (page) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setCountUsers(response.data.totalCount);
            });
    }

    componentDidMount() {
        this.getUsers(this.props.currentPage);
    }

    getPages = () => {
        let pages = [];
        for (let i = 1; i <= Math.ceil(this.props.countUsers / this.props.pageSize); i++)
            pages.push(i);
        return pages;
    }
    render() {
        let pages = this.getPages();
        return (
            <div>
                {
                    this.props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img className={classes.ava}
                             src={user.photos.small === null ? ava : user.photos.small}/>
                    </div>
                    <div>
                        <button onClick={user.followed ? () =>
                            this.props.unfollow(user.id) : () => this.props.follow(user.id)}>
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
                    {pages.map(page => {
                        return (
                            <span onClick={() => {
                                this.props.setCurrentPage(page);
                                this.getUsers(page);
                            }}
                                className={this.props.currentPage === page ? classes.currentPage : classes.item}>{page}
                            </span>)
                    })}
                </div>
            </div>)
    }
}

export default Users;