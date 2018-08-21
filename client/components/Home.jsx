import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component {
  render () {
    return (
      <div>
        <h2>HOME COMPONENT</h2>
        <Link to='/about-me'>About Me</Link>
        <Link to='/projects'>Projects</Link>
      </div>
    )
  }
}

export default Home
