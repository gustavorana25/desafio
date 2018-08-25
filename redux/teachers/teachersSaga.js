
import fetch from 'isomorphic-unfetch'
import { call, put, take } from 'redux-saga/effects'
import { fetchTeachersSuccess, fetchTeachersError } from './teachersActions'

export const ASYNC_FETCH_TEACHERS = 'ASYNC_FETCH_TEACHERS';
export function* asyncFetchTeachers() {
    try {
        let res = yield call(fetch, 'https://5b7570f8deca780014ec9f86.mockapi.io/v1/professores')
        let json = yield call([res, 'json'])
        yield put(fetchTeachersSuccess(json))
    } catch (error) {
        yield put(fetchTeachersError(error))
    }
};
