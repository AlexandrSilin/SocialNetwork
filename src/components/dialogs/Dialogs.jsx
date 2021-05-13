import React from 'react';
import classes from './Dialogs.module.css';
import Message from "./message/Message";
import Dialog from "./dialog/Dialog";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {
    let newMessageElement = React.createRef();
    let messagesElement = props.messagesData.map(messages => <Message message={messages.message}/>)
    let dialogElement = props.dialogsData.map(dialogs => <Dialog id={dialogs.id} name={dialogs.name}/>)
    if (!props.isAuth)
        return <Redirect to={'login'}/>
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
                                  value={props.newMessageText}
                                  onChange={() => props.onChange(newMessageElement.current.value)}
                                  placeholder="Enter your Message"/>
                    </div>
                    <div>
                        <button onClick={() => {
                            props.onClick()
                        }}>Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;