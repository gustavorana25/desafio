import React, { Component } from 'react'
import Link from 'next/link'
import './style.scss'
import { connect } from "react-redux"
import Button from '../buttons';

import { emailValidation } from '../../helpers/validation/email-validation';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailError: false
        }
    }

    emailValidate(){
        if (!emailValidation(this.refs.email.value))
            this.setState({ emailError: true})
    }
    
    cleanValidate(){
        this.setState({ emailError: false })
    }

    render(){
        return(
            <section className="login-page">
                <h1>Faça seu login</h1>
                <fieldset>
                    <input type="text" ref="email" name="e-mail" placeholder="E-mail" onFocus={()=> this.cleanValidate()} onBlur={()=> this.emailValidate()} />
                    {this.state.emailError && <span className="errorValidation">E-mail invalido</span>}
                </fieldset>
                <fieldset>
                    <input type="password" name="password" placeholder="Senha" />
                </fieldset>
                
                <Button className="colored-button wide">login</Button>
            </section>
        )
    }
}

export default connect(state => state.user)(Login) 
