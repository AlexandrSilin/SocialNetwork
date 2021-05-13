import React from "react";
import Dialogs from "./Dialogs";
import {changeMessageBodyActionCreator, sendMessageActionCreator} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);

let mapDispatchToProps = (dispatch) => {
    return {
        onChange: (text) => dispatch(changeMessageBodyActionCreator(text)),
        onClick: () => dispatch(sendMessageActionCreator())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);