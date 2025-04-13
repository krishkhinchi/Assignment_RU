import React from 'react'

function personalInfo({name, age}) {
  return (
    <div>
        <h1>Personal Information</h1>
        <p>Name: {name} </p>
        <p>Age: {age} </p>
    </div>
  )
}

export default personalInfo