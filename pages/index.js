import React, { Component } from "react";
import { connect } from "react-redux";
import withReduxSaga from 'next-redux-saga'
import { asyncFetchCourses } from '../redux/courses/coursesSaga'

class Page extends Component {
  static getInitialProps(props) {
    const { store } = props.ctx
    store.dispatch({ type: 'ASYNC_FETCH_COURSES' })
  }
  render() {
    console.log(this.props);
    return (
      <div>
        Home
      </div>
    )
  }
}

export default withReduxSaga({ async: true })(
  connect(state => state)(Page)
)