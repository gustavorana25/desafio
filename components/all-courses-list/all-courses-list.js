import React from 'react'
import { connect } from "react-redux"
import Link from 'next/link'
import './style.scss'

import CourseList from '../course-list/course-list'

const getAllAreas = (array, task) =>{
    if (array.indexOf(task.area) === -1)
        array.push(task.area);
    return array;
} 

const AllCoursesList = ({all}) => {
    return(
        <section className="courses-list">
            {
                all
                .reduce(getAllAreas, [])
                .map((area,i)=>(
                    <CourseList key={i} name={area} courses={all.filter(elem => elem.area === area)} />
                ))
            }
        </section>
    )
}

export default connect(state => state.courses)(AllCoursesList) 
