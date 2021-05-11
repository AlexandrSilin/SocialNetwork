import React from "react";
import Header from "./Header";
import {setUserDataActionCreator} from "../../redux/authReducer";
import {connect} from "react-redux";
import {isAuth} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        isAuth().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                this.props.setUserData(id, email, login);
            }
        });
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
        setUserData: (userId, email, login) => dispatch(setUserDataActionCreator(userId, email, login)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);