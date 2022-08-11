const ADD_MESSAGE = { type: 'ADD-MESSAGE' }
const ON_MESSAGE_CHANGE = { type: 'UPDATE-MESSAGE-TEXT' }

const DialogsPageReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessages = {
                id: 4,
                message: state.newMessageText,
                url: 'https://sun9-north.userapi.com/sun9-81/s/v1/ig2/da6_C7DqFIfkuKMp6mfFdonyILAY7HLYqdw4Y9MJmH2mZGVCwQuHCGzHOeqkbVnIKf1BBM95uA89Zqx_vISWABKH.jpg?size=200x200&quality=96&crop=463,32,490,490&ava=1'
            }
            state.messages.push(newMessages);
            state.newMessageText = ''
            return state
        case ON_MESSAGE_CHANGE:
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
    
}
export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE}
}
export const onMessageChangeActionCreator = (text) => { 
    return {type: ON_MESSAGE_CHANGE , newText: text }
}


export default DialogsPageReducer;
