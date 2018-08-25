
import { call, put, take } from 'redux-saga/effects'
import { fetchCoursesSuccess, fetchCoursesError, FETCH_COURSES_SUCCESS } from './coursesActions'

export const ASYNC_FETCH_COURSES = 'ASYNC_FETCH_COURSES';
export function* asyncFetchCourses() {
    try {
        let res = yield call(fetch, 'https://5b7570f8deca780014ec9f86.mockapi.io/v1/cursos')
        let json = yield call([res, 'json'])
        yield put({ type: FETCH_COURSES_SUCCESS, courses: json})
    } catch (error) {
        yield put(fetchCoursesError(error))
    }
};
