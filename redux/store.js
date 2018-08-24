import { createStore, combineReducers } from 'redux'

import coursesReducer from './courses/coursesReducer';

const store = createStore(combineReducers({
    courses: coursesReducer
}));

export default store;