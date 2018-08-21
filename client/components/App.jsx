import React from 'react'
import {Route} from 'react-router-dom'

import Home from './Home'
import About from './About'
import Projects from './Projects'

const App = () => {
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/about-me' component={About} />
      <Route path='/projects' component={Projects} />
    </div>
  )
}

export default App
