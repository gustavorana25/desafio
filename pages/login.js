import React, { Component } from "react"
import { connect } from "react-redux"
import withReduxSaga from 'next-redux-saga'

import FormLogin from '../components/form-login/form-login'
import Header from '../components/header/header'

class LoginPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <FormLogin />
            </div>
        )
    }
}

export default withReduxSaga({ async: true })(
    connect(state => state)(LoginPage)
)