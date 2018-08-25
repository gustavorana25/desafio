export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = (user) => {
    return {
        type: 'LOGIN_SUCCESS',
        user
    };
};

export const LOGIN_ERROR = 'LOGIN_ERROR';
export const loginError = (error) => {
    return {
        type: 'LOGIN_ERROR',
        error: error
    };
};
