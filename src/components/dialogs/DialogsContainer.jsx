import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {changeMessageBodyActionCreator, sendMessageActionCreator} from "../../redux/dialogsReducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChange: (text) => dispatch(changeMessageBodyActionCreator(text)),
        onClick: () => dispatch(sendMessageActionCreator())
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);