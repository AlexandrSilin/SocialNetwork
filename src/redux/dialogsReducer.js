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
    ]
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return action.value.length > 0 ? {
                ...state,
                messagesData: [...state.messagesData, {
                    id: state.messagesData.length + 1,
                    message: action.value,
                }]
            } : state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = (message) => {
    debugger
    return {type: SEND_MESSAGE, value: message}
}

export default dialogsReducer