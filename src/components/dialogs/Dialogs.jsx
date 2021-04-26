import React from 'react'
import classes from './Dialogs.module.css'
import Message from "./message/Message";
import Dialog from "./dialog/Dialog";
import {changeMessageBodyActionCreator, sendMessageActionCreator} from "../../redux/state";

const Dialogs = (props) => {
    let newMessageElement = React.createRef();
    let messagesElement = props.dialogs.messagesData.map(messages => <Message message={messages.message}/>)
    let dialogElement = props.dialogs.dialogsData.map(dialogs => <Dialog id={dialogs.id} name={dialogs.name}/>)
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElement}
            </div>
            <div className={classes.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div>
                        <textarea ref={newMessageElement}
                                  value={props.dialogs.newMessageText}
                                  onChange={() => props.dispatch(changeMessageBodyActionCreator(newMessageElement.current.value))}
                                  placeholder="Enter your Message"/>
                    </div>
                    <div>
                        <button onClick={() => {
                            props.dispatch(sendMessageActionCreator())
                        }}>Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;