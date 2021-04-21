import React from 'react'
import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    Ilya
                </div>
                <div className={classes.dialog}>
                    Dasha
                </div>
                <div className={classes.dialog}>
                    Marina
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>
                    Hi
                </div>
                <div className={classes.message}>
                    How are you?
                </div>
            </div>
        </div>

    )
}

export default Dialogs;