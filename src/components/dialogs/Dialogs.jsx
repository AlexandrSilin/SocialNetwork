import React from 'react'
import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    let newMessageElement = React.createRef();
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.dialogElement}
            </div>
            <div className={classes.messages}>
                <div>{props.messagesElement}</div>
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