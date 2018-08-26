import React, { Component } from "react"
import { connect } from "react-redux"
import withReduxSaga from 'next-redux-saga'

import AllTeachers from '../components/all-teachers/all-teachers'
import Header from '../components/header/header'


class Page extends Component {
    static getInitialProps(props) {
        const { store } = props.ctx
        store.dispatch({ type: 'ASYNC_FETCH_COURSES' })
        store.dispatch({ type: 'ASYNC_FETCH_TEACHERS' })
        store.dispatch({ type: 'ASYNC_FETCH_MODULES', payload: { id: 6 } })
    }
    render() {
        const { all } = this.props.courses;
        return (
            <div>
                <Header />
                <AllTeachers />
            </div>
        )
    }
}

export default withReduxSaga({ async: true })(
    connect(state => state)(Page)
)