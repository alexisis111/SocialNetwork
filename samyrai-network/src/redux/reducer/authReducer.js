import { getIsAuth } from "../../API/api";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}


const AuthReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA: {
            return {

                ...state, ...action.data, isAuth: true
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } })
export const getAuth = () => {
    return (dispatch) => {
        getIsAuth().then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                dispatch(setAuthUserData(id, email, login))
            }
        });
    }
}
export default AuthReducer;
