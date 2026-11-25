import React from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
  const location=useLocation()
  return (
    <div>
      <h1>About Page</h1>
      <h3>Current Path:{location.pathname}</h3>
    </div>
  )
}

export default About