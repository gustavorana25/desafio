import React from 'react'
import Link from 'next/link'
import './style.scss'

const Button = ({ className, children, onClick}) =>(
    <button onClick={()=> onClick()} className={"button "+className}>
        {children}
    </button>
)

export default Button
