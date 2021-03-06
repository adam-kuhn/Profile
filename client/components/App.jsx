import React from 'react'
import {Route} from 'react-router-dom'

import Nav from './Nav/Nav'
import Home from './Home/Home'
import About from './About/About'
import Projects from './Projects/Projects'

const App = () => {
  return (
    <div>
      <Nav />
      <Route exact path='/' component={Home} />
      <Route path='/about-me' component={About} />
      <Route path='/projects' component={Projects} />
    </div>
  )
}

export default App
