import { combineReducers, createStore } from "redux";
import DialogsPageReducer from "./reducer/dialogsPageReducer"
import ProfilePageReducer from "./reducer/profilePageReducer"
import SidebarReducer from "./reducer/sidebarReducer";


let redusers = combineReducers({
    profilePage: ProfilePageReducer,
    dialogsPage: DialogsPageReducer,
    sidebar: SidebarReducer
})
let store = createStore(redusers)

export default store