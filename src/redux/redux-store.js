import { combineReducers, createStore } from "redux";
import DialogsPageReducer from "./reducer/dialogsPageReducer"
import MusicReduser from "./reducer/musicReducer";
import ProfilePageReducer from "./reducer/profilePageReducer"
import SidebarReducer from "./reducer/sidebarReducer";
import UsersReducer from "./reducer/usersReducer";


let redusers = combineReducers({
    profilePage: ProfilePageReducer,
    dialogsPage: DialogsPageReducer,
    sidebar: SidebarReducer,
    usersPage: UsersReducer,
    music: MusicReduser
})
let store = createStore(redusers)

export default store