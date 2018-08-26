import fetch from 'isomorphic-unfetch'
import { call, put, take } from 'redux-saga/effects'
import { fetchModulesSuccess, fetchModulesError } from './courseModulesActions'

export const ASYNC_FETCH_MODULES = 'ASYNC_FETCH_MODULES';
export function* asyncFetchModules(action) {
    try {
        let res = yield call(fetch, 'https://5b7570f8deca780014ec9f86.mockapi.io/v1/modulos')
        let json = yield call([res, 'json'])
        yield put(fetchModulesSuccess(action.payload.id,json))
    } catch (error) {
        yield put(fetchModulesError(error))
    }
};
