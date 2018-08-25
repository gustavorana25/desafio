import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import allReducers from './allReducers'
import allSaga from './allSaga'

const sagaMiddleware = createSagaMiddleware()

function configureStore(initialState) {
    const store = createStore(
        allReducers,
        initialState,
        applyMiddleware(sagaMiddleware)
    )
    store.runSagaTask = () => {
        store.sagaTask = sagaMiddleware.run(allSaga)
    }
    store.runSagaTask()
    return store
}

export default configureStore