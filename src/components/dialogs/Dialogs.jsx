import React from 'react'
import classes from './Dialogs.module.css'
import Message from "./message/Message";
import Dialog from "./dialog/Dialog";

const Dialogs = (props) => {
    let messagesElement = props.dialogs.messagesData.map(messages => <Message message={messages.message}/>)
    let dialogElement = props.dialogs.dialogsData.map(dialogs => <Dialog id={dialogs.id} name={dialogs.name}/>)
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElement}
            </div>
            <div className={classes.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;