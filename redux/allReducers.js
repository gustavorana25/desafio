import { combineReducers } from 'redux'

import coursesReducer from './courses/coursesReducer'
import teachersReducer from './teachers/teachersReducer'
import userReducer from './user/userReducer'
import modulesReducer from './courseModules/courseModulesReducer'

export default combineReducers({
    courses: coursesReducer,
    teachers: teachersReducer,
    user: userReducer,
    modules: modulesReducer
})