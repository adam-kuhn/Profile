import React from 'react'
import {Route} from 'react-router-dom'

import Nav from './Nav/Nav'
import Home from './Home'
import About from './About'
import Projects from './Projects'

import './app.css'

const App = () => {
  return (
    <div>
      <Nav />
      <Route exact path='/' component={Home} />
      <div className='test'>
        <Route path='/about-me' component={About} />
      </div>
      <Route path='/projects' component={Projects} />
      <p className='test'>I should be orange</p>
    </div>
  )
}

export default App
