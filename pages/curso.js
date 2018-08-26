import React, { Component } from "react"
import { connect } from "react-redux"
import withReduxSaga from 'next-redux-saga'
import Router from 'next/router'

import Header from '../components/header/header'
import AllCourseModules from '../components/course-modules/course-modules'

class Page extends Component {
    static getInitialProps(props) {
        const { store } = props.ctx
        store.dispatch({ type: 'ASYNC_FETCH_MODULES', payload: {id: 6} })
    }
    
    render() {
        return (
            <div className="page">
                <Header />
                <AllCourseModules selectedCourseId="6" />
            </div>
        )
    }
}

export default withReduxSaga({ async: true })(
    connect(state => state)(Page)
)