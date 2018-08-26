import React, { Component } from 'react'
import withReduxSaga from 'next-redux-saga'
import { connect } from "react-redux"
import Router from 'next/router'
import './style.scss'

import Button from '../buttons';
import { emailValidation } from '../../helpers/validation/email-validation';

class FormLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailError: false
        }
    }

    componentDidUpdate(){
        const { user } = this.props.user
        if(user.name !== undefined)
            Router.push('/home')
    }

    emailValidate(){
        if (!emailValidation(this.refs.email.value))
            this.setState({ emailError: true})
    }
    
    cleanValidate(){
        this.setState({ emailError: false })
    }

    loginCall(){
        const email = this.refs.email.value;
        const senha = this.refs.password.value;
        this.props.dispatch({ type: "ASYNC_LOGIN", payload: { email, senha}})
    }

    render(){
        return(
            <section className="login-page">
                <h1>Faça seu login</h1>
                <fieldset>
                    <input type="text" ref="email" placeholder="E-mail" onFocus={()=> this.cleanValidate()} onBlur={()=> this.emailValidate()} />
                    {this.state.emailError && <span className="errorValidation">E-mail invalido</span>}
                </fieldset>
                <fieldset>
                    <input type="password" ref="password" placeholder="Senha" />
                </fieldset>
                
                <Button onClick={() => this.loginCall()} className="colored-button wide">login</Button>
            </section>
        )
    }
}

export default withReduxSaga({ async: true })(
    connect(state => state)(FormLogin)
)