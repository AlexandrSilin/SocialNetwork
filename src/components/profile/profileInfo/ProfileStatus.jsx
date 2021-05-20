import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status)
            this.setState({status: this.props.status})
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.editMode ?
                        <input autoFocus={true} onBlur={() => {
                            this.props.updateStatus(this.state.status);
                            this.setState({editMode: !this.state.editMode})
                        }}
                               onChange={(e) => this.setState({status: e.currentTarget.value})}
                               value={this.state.status}/> :
                        <span
                            onDoubleClick={() => this.setState({editMode: !this.state.editMode})}>
                            {this.props.status || "----"}
                        </span>}
                </div>
            </div>
        )
    }
}

export default ProfileStatus;