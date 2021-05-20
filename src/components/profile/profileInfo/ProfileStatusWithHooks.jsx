import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    useEffect(() => setStatus(props.status), [props.status])

    return (
        <div>
            <div>
                {editMode ?
                    <input autoFocus={true} onBlur={() => {
                        setEditMode(false);
                        props.updateStatus(status)
                    }}
                           onChange={(e) => setStatus(e.currentTarget.value)}
                           value={status}/> :
                    <span
                        onDoubleClick={() => setEditMode(true)}>
                        {status || "----"}
                    </span>}
            </div>
        </div>
    )
}

export default ProfileStatusWithHooks;