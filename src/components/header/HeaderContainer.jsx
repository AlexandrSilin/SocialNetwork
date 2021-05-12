import React from "react";
import Header from "./Header";
import {authThunkCreator} from "../../redux/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.auth();
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        isAuth: state.auth.isAuth,
        login: state.auth.login
    })
};

const mapDispatchToProps = (dispatch) => {
    return {
        auth: () => dispatch(authThunkCreator())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);