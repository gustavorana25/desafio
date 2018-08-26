import React from 'react'
import { connect } from "react-redux"
import Link from 'next/link'
import './style.scss'

import Module from '../module/module'

const AllCourseModules = ({ all, selectedCourseId }) => {
    return (
        <section className="modules-list">
            <h1>Curso: Raciocínio Clínico</h1>
            <h2>Conteudo do curso</h2>
            {all[selectedCourseId].map(module => (
                    <Module key={module.id} module={module} newModule={true} />
            ))}
        </section>
    )
}

export default connect(state => state.modules)(AllCourseModules) 
