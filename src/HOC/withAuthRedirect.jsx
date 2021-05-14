import React from "react";
import {Redirect, withRouter} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            return this.props.isAuth ? <Component {...this.props}/> : <Redirect to={'/login'}/>
        }
    }

    return connect(mapStateToPropsForRedirect)(withRouter(RedirectComponent));
}
