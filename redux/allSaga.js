import { takeLatest, all } from 'redux-saga/effects'
import { ASYNC_FETCH_COURSES, asyncFetchCourses  } from './courses/coursesSaga'

export default function* root() {
    yield all([
        takeLatest(ASYNC_FETCH_COURSES, asyncFetchCourses)
    ])
}