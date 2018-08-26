import { takeLatest, all } from 'redux-saga/effects'
import { ASYNC_FETCH_COURSES, asyncFetchCourses  } from './courses/coursesSaga'
import { ASYNC_FETCH_TEACHERS, asyncFetchTeachers  } from './teachers/teachersSaga'
import { ASYNC_LOGIN, asyncLogin  } from './user/userSaga'
import { ASYNC_FETCH_MODULES, asyncFetchModules  } from './courseModules/courseModulesSaga'

export default function* root() {
    yield all([
        takeLatest(ASYNC_FETCH_COURSES, asyncFetchCourses),
        takeLatest(ASYNC_FETCH_TEACHERS, asyncFetchTeachers),
        takeLatest(ASYNC_LOGIN, asyncLogin),
        takeLatest(ASYNC_FETCH_MODULES, asyncFetchModules)
    ])
}