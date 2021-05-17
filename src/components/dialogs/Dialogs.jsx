import React from 'react';
import classes from './Dialogs.module.css';
import Message from "./message/Message";
import Dialog from "./dialog/Dialog";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {
    if (!props.isAuth)
        return <Redirect to={'login'}/>
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.dialogsData.map(dialogs => <Dialog id={dialogs.id} name={dialogs.name}/>)}
            </div>
            <div className={classes.messages}>
                <div>{props.messagesData.map(messages => <Message message={messages.message}/>)}</div>
                <div>
                    <div>
                        <AddMessageFormRedux onSubmit={(values) => props.sendMessage(values.newMessageBody)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your Message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "addMessageForm"})(AddMessageForm)

export default Dialogs;