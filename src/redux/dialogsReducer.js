const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
    dialogsData: [
        {id: 1, name: "Dasha"},
        {id: 2, name: "Ilya"},
        {id: 3, name: "Marina"},
    ],
    messagesData: [
        {id: 1, message: "Hello"},
        {id: 2, message: "how are you?"}
    ],
    newMessageText: ''
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return state.newMessageText.length > 0 ? {
                ...state,
                messagesData: [...state.messagesData, {
                    id: state.messagesData.length + 1,
                    message: state.newMessageText,
                }],
                newMessageText: ''
            } : state;
        case CHANGE_MESSAGE_TEXT:
            return ({
                ...state,
                newMessageText: action.value
            })
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => {
    return {type: SEND_MESSAGE}
}

export const changeMessageBodyActionCreator = (message) => {
    return {type: CHANGE_MESSAGE_TEXT, value: message}
}

export default dialogsReducer