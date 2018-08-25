import React, { Component } from "react"
import { connect } from "react-redux"
import withReduxSaga from 'next-redux-saga'

import Login from '../components/login/login'
import Header from '../components/header/header'

class LoginPage extends Component {
    render() {
        return (
            <Login />
        )
    }
}

export default LoginPage;