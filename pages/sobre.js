import React, { Component } from "react"
import { connect } from "react-redux"
import withReduxSaga from 'next-redux-saga'

import BannerHome from '../components/banner-home/banner-home'
import Header from '../components/header/header'

class Page extends Component {
    render() {
        return (
            <div>
                sobre
            </div>
        )
    }
}

export default withReduxSaga({ async: true })(
    connect(state => state)(Page)
)