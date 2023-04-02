import { addMessageActionCreator, onMessageChangeActionCreator } from "../../redux/reducer/dialogsPageReducer"
import { connect } from 'react-redux';
import Dialogs from "./Dialogs";
import { withAuthRedirect } from '../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
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



const DialogsContainer = withAuthRedirect( connect(mapStateToProps, mapDispatchToProps)(Dialogs))

export default DialogsContainer;
