import React, { Component } from "react"
import { connect } from "react-redux"
import withReduxSaga from 'next-redux-saga'

import AllCoursesList from '../components/all-courses-list/all-courses-list'
import CourseList from '../components/course-list/course-list'
import AllTeachers from '../components/all-teachers/all-teachers'
import BannerHome from '../components/banner-home/banner-home'
import Header from '../components/header/header'


class Page extends Component {
  static getInitialProps(props) {
    const { store } = props.ctx
    store.dispatch({ type: 'ASYNC_FETCH_COURSES' })
    store.dispatch({ type: 'ASYNC_FETCH_MODULES', payload: { id: 6 } })
  }
  render() {
    const { all } = this.props.courses;
    return (
      <div>
        <Header />
        <BannerHome />
        <CourseList name="Novidades" courses={all.filter(elem => elem.id == 6)} />
        <AllCoursesList />
        <AllTeachers />
      </div>
    )
  }
}

export default withReduxSaga({ async: true })(
  connect(state => state)(Page)
)