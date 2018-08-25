import { takeLatest, all } from 'redux-saga/effects'
import { ASYNC_FETCH_COURSES, asyncFetchCourses  } from './courses/coursesSaga'
import { ASYNC_FETCH_TEACHERS, asyncFetchTeachers  } from './teachers/teachersSaga'

export default function* root() {
    yield all([
        takeLatest(ASYNC_FETCH_COURSES, asyncFetchCourses),
        takeLatest(ASYNC_FETCH_TEACHERS, asyncFetchTeachers)
    ])
}