import React from 'react'
import Link from 'next/link'
import './style.scss'

const Header = () => (
    <header className="general-header">
        <Link className="login" href="/login">login</Link>
    </header>
)

export default Header
