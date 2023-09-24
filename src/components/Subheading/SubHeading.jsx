import React from 'react'
import './SubHeading.css'

const SubHeading = ({ title }) => {
  return (
    <div className='subheading'>
        <p>{title}</p>
    </div>
  )
}

export default SubHeading