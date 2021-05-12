import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getPostThunkCreator} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom"

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getPost(this.props.match.params.userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getPost: (userId) => dispatch(getPostThunkCreator(userId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));