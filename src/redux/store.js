import DialogsPageReducer from "./reducer/dialogsPageReducer"
import ProfilePageReducer from "./reducer/profilePageReducer"
import SidebarReducer from "./reducer/sidebarReducer"


let store = {
    _appState: {
        profilePage: {
            profileImg: [
                { url: 'https://sun9-west.userapi.com/sun9-8/s/v1/ig2/fvg1qRJlxX9y7AkO3d6ltEluiV4EK9gtS1Qoia2oqhEPog_lC95lsTw4vaqD_TYt2mkT63rLZBeN1wDvcCI3L-XY.jpg?size=200x200&quality=96&crop=2,2,534,534&ava=1' }
            ],
            posts: [
                { id: 1, message: 'hey hey hey', likesCount: 6 },
                { id: 2, message: 'hello', likesCount: 44 },
                { id: 3, message: 'how are you', likesCount: 0 }
            ],
            newPostText: ''

        },
        dialogsPage: {

            dialogs: [
                { id: 1, name: "Sveta", url: 'https://sun9-north.userapi.com/sun9-77/s/v1/ig2/-pfpFM7XJ6ta9NVbNQyh7Zu_PcsIAQq7pNOqjQlYqFkT7Q1tZKRyEuspaLKqHAZacWhbAL3aotT9l2U7fikoLN23.jpg?size=200x200&quality=96&crop=3,3,794,794&ava=1' },
                { id: 2, name: "Sasha", url: 'https://sun9-east.userapi.com/sun9-59/s/v1/ig2/hXFDsNVZbPidK8eJMHqQ_cKr8e0jiGak57ejnwiQNav1MWUR-ugX2sRVrqvTqZ4EOIZ02ZA_dg9bygjkeS1LtVL2.jpg?size=200x200&quality=96&crop=143,160,1412,1412&ava=1' },
                { id: 3, name: "Pasha", url: 'https://sun9-west.userapi.com/sun9-47/s/v1/ig2/bH1Fl41zOmCN4Xw9nA-_TxlgTuIZb2zsGCr5TbUlOXVXoC1eQJxVYWMcuyN6jcquK8v24j5QJ_EOiYhbW0xXefov.jpg?size=200x200&quality=95&crop=0,210,593,593&ava=1' },
                { id: 4, name: "Igor", url: 'https://sun9-west.userapi.com/sun9-6/s/v1/ig2/nyf_uHWU_3WGtskAx6eL3mXHIml28iWYzZXZLz8T3rneRW16umSuk0IFmOZUaY-JM_vWE0VkdeKePHBZk3Q5eDGO.jpg?size=200x200&quality=95&crop=322,812,818,818&ava=1' },
                { id: 5, name: "Goga", url: 'https://sun9-west.userapi.com/sun9-46/s/v1/ig2/D6tYjiN9zdZ-ilcJpPf13BOhmHYDsvOhwjohzIZVIPeZ94RqaUI97m45th2Eg9RAcjhYHJDvFIS1zNJLouCqQZ1k.jpg?size=200x200&quality=96&crop=0,177,1061,1061&ava=1' },
                { id: 6, name: "Lara", url: 'https://sun9-east.userapi.com/sun9-20/s/v1/ig2/7d1dchzsc85ayEPt93og9xpLSXUhsyo1cWS3P4cWeZsGGqQ0t4eyeD2F02tsMwjNnJbrgrQ7VCCtyHLhz0HUB9iY.jpg?size=200x200&quality=95&crop=0,37,555,555&ava=1' }
            ],
            messages:
                [
                    { id: 1, message: "Hi", url: 'https://sun9-north.userapi.com/sun9-77/s/v1/ig2/-pfpFM7XJ6ta9NVbNQyh7Zu_PcsIAQq7pNOqjQlYqFkT7Q1tZKRyEuspaLKqHAZacWhbAL3aotT9l2U7fikoLN23.jpg?size=200x200&quality=96&crop=3,3,794,794&ava=1' },
                    { id: 2, message: "Yo", url: 'https://sun9-east.userapi.com/sun9-59/s/v1/ig2/hXFDsNVZbPidK8eJMHqQ_cKr8e0jiGak57ejnwiQNav1MWUR-ugX2sRVrqvTqZ4EOIZ02ZA_dg9bygjkeS1LtVL2.jpg?size=200x200&quality=96&crop=143,160,1412,1412&ava=1' },
                    { id: 3, message: "Wow", url: 'https://sun9-west.userapi.com/sun9-47/s/v1/ig2/bH1Fl41zOmCN4Xw9nA-_TxlgTuIZb2zsGCr5TbUlOXVXoC1eQJxVYWMcuyN6jcquK8v24j5QJ_EOiYhbW0xXefov.jpg?size=200x200&quality=95&crop=0,210,593,593&ava=1' }
                ],
            newMessageText: ''

        },
        sidebar: {
            link: [
                { to: '/profile', link: 'Profile' },
                { to: '/dialogs', link: 'Messages' },
                { to: '/music', link: 'Music' },
                { to: '/users', link: 'Users' },
                { to: '/settings', link: 'Settings' }
            ]
        }
    },
    _callSubsciber() {
        console.log('change appState')
    },


    getState() {

        return this._appState
    },
    subscribe(observer) {
        this._callSubsciber = observer;
    },

    dispatch(action) {
        this._appState.profilePage = ProfilePageReducer( this._appState.profilePage, action)
        this._appState.dialogsPage = DialogsPageReducer( this._appState.dialogsPage, action)
        this._appState.sidebar = SidebarReducer( this._appState.sidebar, action)
        this._callSubsciber(this._appState);
    }
}


window.store = store
export default store;