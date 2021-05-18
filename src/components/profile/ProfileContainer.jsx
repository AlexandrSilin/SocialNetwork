import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getPostThunkCreator, setStatusThunkCreator, updateStatusThunkCreator} from "../../redux/profileReducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {Redirect} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId :
            this.props.isAuth ? this.props.userId : <Redirect to='login'/>;
        this.props.getPost(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                        updateStatus={this.props.updateStatus} setStatus={this.props.setStatus}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getPost: (userId) => dispatch(getPostThunkCreator(userId)),
        getStatus: (userId) => dispatch(setStatusThunkCreator(userId)),
        updateStatus: (status) => dispatch(updateStatusThunkCreator(status))
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)
(ProfileContainer);