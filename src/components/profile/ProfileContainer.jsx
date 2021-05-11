import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {setUserProfileActionCreator} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom"
import {getPosts} from "../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        getPosts(this.props.match.params.userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
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
        setUserProfile: (profile) => dispatch(setUserProfileActionCreator(profile))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));