import { applyMiddleware, combineReducers, createStore } from "redux";
import AuthReducer from "./reducer/authReducer";
import DialogsPageReducer from "./reducer/dialogsPageReducer"
import MusicReduser from "./reducer/musicReducer";
import ProfilePageReducer from "./reducer/profilePageReducer"
import SidebarReducer from "./reducer/sidebarReducer";
import UsersReducer from "./reducer/usersReducer";
import thunk from 'redux-thunk';


let redusers = combineReducers({
    profilePage: ProfilePageReducer,
    dialogsPage: DialogsPageReducer,
    sidebar: SidebarReducer,
    usersPage: UsersReducer,
    music: MusicReduser,
    auth: AuthReducer
})
let store = createStore(redusers, applyMiddleware(thunk))

export default store