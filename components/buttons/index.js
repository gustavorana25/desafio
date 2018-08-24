import React from 'react'
import Link from 'next/link'
import './style.scss'

const Button = ({ className, children}) =>(
    <button className={"button "+className}>
        {children}
    </button>
)

export default Button
