import { FETCH_MODULES_SUCCESS, FETCH_MODULES_ERROR } from './courseModulesActions'

const defaultState = {
    all: []
};

const modulesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_MODULES_SUCCESS:
            return {
                ...state,
                all: { ...action.all}
            };
        case FETCH_MODULES_ERROR:
            return {
                ...state,
                error: action.error
            };


        default:
            return state;
    }
};

export default modulesReducer;