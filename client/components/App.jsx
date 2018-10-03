import React from 'react'
import {Route} from 'react-router-dom'

import Nav from './Nav/Nav'
import Home from './Home/Home'
import About from './About/About'
import Projects from './Projects/Projects'

const name = 'hi'
const App = () => {
  return (
    <div>
      <p>{name}</p>
      <Nav />
      <Route exact path='/' component={Home} />
      <Route path='/about-me' component={About} />
      <Route path='/projects' component={Projects} />
    </div>
  )
}

export default App
