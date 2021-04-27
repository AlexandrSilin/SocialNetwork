const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            if (state.newMessageText.length > 0)
                state.messagesData.push({
                    id: state.messagesData.length,
                    message: state.newMessageText
                });
            state.newMessageText = '';
            return state;
        }
        case CHANGE_MESSAGE_TEXT: {
            state.newMessageText = action.value;
            return state;
        }
        default:
            return state;
    }

}

export default dialogsReducer