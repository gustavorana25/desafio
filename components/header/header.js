import React from 'react'
import Link from 'next/link'
import { connect } from "react-redux"   
import './style.scss'

const Header = ({user}) => (
    <header className="general-header">
        <div className="max-content">
            <Link href="/"><a className="logo"><img src="/static/logo.png" /></a></Link>
            <Link href="/">Home</Link>
            <Link href="/professores">Professores</Link>
            
            {user.name 
                ? <Link href="/home">Meus cursos</Link>
                : <Link href="/login">Login</Link>
            }
            
        </div>
    </header>
)

export default connect(state => state.user)(Header) 

