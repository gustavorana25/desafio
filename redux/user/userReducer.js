import { LOGIN_SUCCESS, LOGIN_ERROR } from './userActions'

const defaultState = {
    user: {}
};

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: { ...action.user}
            };
        case LOGIN_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};

export default userReducer;