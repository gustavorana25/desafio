import React, { Component } from "react"
import { connect } from "react-redux"
import withReduxSaga from 'next-redux-saga'
import Router from 'next/router'

import Header from '../components/header/header'
import CourseList from '../components/course-list/course-list'

class Page extends Component {
    static getInitialProps(props) {
        const { store } = props.ctx
        store.dispatch({ type: 'ASYNC_FETCH_COURSES' })
    }

    componentDidMount(){
        if (this.props.user.user.name === undefined)
            Router.push('/login');
    }

    render() {
        const { user } = this.props.user;
        const { all } = this.props.courses;
        return (
            <div className="page">
                <Header />
                {user.name && (
                    <div>
                        <h1 style={{ maxWidth:'1200px', margin: '150px auto 80px', fontWeight: '300' }}>Bem vindo de volta {user.name}</h1>
                        <CourseList name="Novidades no seus cursos" courses={all.filter(elem => elem.id == 6 && user.courses.indexOf(elem.id) != -1)} />
                        <CourseList name="Seus cursos" courses={all.filter(elem => user.courses.indexOf(elem.id) != -1)} />
                        <CourseList name="Outros cursos" courses={all.filter(elem => user.courses.indexOf(elem.id) == -1)} />
                    </div>
                )}
            </div>
        )
    }
}

export default withReduxSaga({ async: true })(
    connect(state => state)(Page)
)