import { FETCH_TEACHERS_SUCCESS, FETCH_TEACHERS_ERROR } from './teachersActions'

const defaultState = {
    all: []
};

const teachersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_TEACHERS_SUCCESS:
            return {
                ...state,
                all: action.courses
            };
        case FETCH_TEACHERS_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};

export default teachersReducer;