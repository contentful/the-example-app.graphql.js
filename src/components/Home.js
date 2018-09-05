import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Hello this is the HOME page</h1>
      <Link to="/courses">Courses</Link>
    </div>
  )
}

export default Home
