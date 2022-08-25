import { addMessageActionCreator, onMessageChangeActionCreator } from "../../redux/reducer/dialogsPageReducer"
import { connect } from 'react-redux';
import Dialogs from "./Dialogs";


const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateMessageText: (text) => {
            let action = onMessageChangeActionCreator(text)
            dispatch(action)
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
