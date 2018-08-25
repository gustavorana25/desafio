
import fetch from 'isomorphic-unfetch'
import { call, put, take } from 'redux-saga/effects'
import { fetchCoursesSuccess, fetchCoursesError } from './coursesActions'

export const ASYNC_FETCH_COURSES = 'ASYNC_FETCH_COURSES';
export function* asyncFetchCourses() {
    try {
        let res = yield call(fetch, 'https://5b7570f8deca780014ec9f86.mockapi.io/v1/cursos')
        let json = yield call([res, 'json'])
        yield put(fetchCoursesSuccess(json))
    } catch (error) {
        yield put(fetchCoursesError(error))
    }
};
