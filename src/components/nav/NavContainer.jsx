import React from "react";
import {connect} from "react-redux";
import Nav from "./Nav";

let mapStateToProps = (state) => {
    return {
        friends: state.sideBar.friends
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default NavContainer;