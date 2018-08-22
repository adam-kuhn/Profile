import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <Link to='/'>
        <button>
            Home
        </button>
      </Link>
      <Link to='/about-me'>
        <button>
            About Me
        </button>
      </Link>
      <Link to='/projects'>
        <button>
            Projects
        </button>
      </Link>
    </div>
  )
}

export default Nav
