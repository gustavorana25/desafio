import { FETCH_COURSES_SUCCESS, FETCH_COURSES_ERROR } from './coursesActions'

const defaultState = {
    all: []
};

const coursesReducer = (state = defaultState, action) => {
  switch (action.type) {
      case FETCH_COURSES_SUCCESS:
        return {
            ...state,
            all: action.courses
        };
      case FETCH_COURSES_ERROR:
        return {
            ...state,
            error: action.error
        };
    

    default:
        return state;
  }
};

export default coursesReducer;