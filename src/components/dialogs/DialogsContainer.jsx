import React from "react";
import Dialogs from "./Dialogs";
import Message from "./message/Message";
import Dialog from "./dialog/Dialog";
import {changeMessageBodyActionCreator, sendMessageActionCreator} from "../../redux/dialogsReducer";

const DialogsContainer = (props) => {
    let messagesElement = props.store.getState().dialogsReducer.messagesData.map(messages => <Message message={messages.message}/>)
    let dialogElement = props.store.getState().dialogsReducer.dialogsData.map(dialogs => <Dialog id={dialogs.id} name={dialogs.name}/>)
    return <Dialogs messagesElement={messagesElement} dialogElement={dialogElement}
                    newMessageText={props.store.getState().dialogsReducer.newMessageText}
                    onChange={(text) => props.store.dispatch(changeMessageBodyActionCreator(text))}
                    onClick={() => props.store.dispatch(sendMessageActionCreator())}
                    />
}
//dispatch={props.dispatch} dialogs={props.AppState.dialogsReducer}
export default DialogsContainer;