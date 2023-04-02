let initialState = {

    link: [
        { to: '/profile', link: 'Profile' },
        { to: '/dialogs', link: 'Messages' },
        { to: '/music', link: 'Music' },
        { to: '/users', link: 'Users' },
        { to: '/settings', link: 'Settings' }
    ]

}

const SidebarReducer = (state = initialState) => {

    return state
}

export default SidebarReducer;
