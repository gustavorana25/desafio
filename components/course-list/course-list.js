import React, { Component} from 'react'
import { connect } from "react-redux"
import Link from 'next/link'
import './style.scss'

class CourseList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showedCourses: 6
        }
    }
    loadMoreCourses(){
        this.setState({ showedCourses: this.state.showedCourses+6})
    }
    render(){
        const { courses, name } = this.props;
        return(
            <div className="courses-list-container">
                <h1>{name}</h1>
                <div className="courses-list-filtered">
                    {
                        courses
                            .slice(0, this.state.showedCourses)
                            .map(course => (
                                <div key={course.id} className="course">
                                    <span className="bg-course" style={{ backgroundImage: 'url(' + course.imagem + ')', }}></span>
                                    <h3>{course.nome}</h3>
                                </div>
                            ))
                    }
                </div>
                {this.state.showedCourses < courses.length && (
                    <button className="seeMore" onClick={() => this.loadMoreCourses()}>ver mais cursos</button>
                )}
            </div>
        )
    }
}


export default CourseList
