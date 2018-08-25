import React, { Component } from 'react'
import { connect } from "react-redux"
import Link from 'next/link'
import './style.scss'

class AllTeachers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showedTeachers: 10
        }
    }
    loadMoreCourses() {
        this.setState({ showedTeachers: this.state.showedTeachers + 10 })
    }

    render(){
        const { all } = this.props;
        return(
            <section className="teacher-list">
                <h1>Nossos professores</h1>
                <div className="teacher-list-container">            
                    {
                        all
                        .slice(0, this.state.showedTeachers)
                        .map(teacher=>(
                            <div key={teacher.id} className="teacher-card">
                                <div className="avatar" style={{ backgroundImage: 'url(' + teacher.imagem + ')', }}></div>
                                <h3>{teacher.nome}</h3>
                            </div>
                        ))
                    }
                </div>
                {this.state.showedTeachers < all.length && (
                    <button className="seeMore" onClick={() => this.loadMoreCourses()}>ver mais professores</button>
                )}
            </section>
        )
    }
}

export default connect(state => state.teachers)(AllTeachers) 
