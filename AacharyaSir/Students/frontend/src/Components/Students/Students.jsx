import React from 'react'
import "./Students.css"
import Header from '../Header/Header'

function Students() {
  return (
    <>
    <div id="MainStudents">
        <div id="HeaderInStudents">
          <Header/>
        </div>
        <div id="TitleInStudents">
          <h1 className="HeadingInStudents">Students Details</h1>
          <button className="btn1InTitleInStudents">Add new student</button>
        </div>
    </div>
    </>
  )
}

export default Students