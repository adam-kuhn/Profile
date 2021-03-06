import React from 'react'

import './standard-project.css'

const StandardProject = (props) => {
  const {title, image, desc, live, code} = props
  return (
    <div className='container-vert'>
      <h3>{title}</h3>
      <img className='proj-img' src={image} />
      <p>{desc}</p>
      {live && <a href={live}>Check it out!</a>}
      <a href={code}>Checkout the code!</a>
    </div>
  )
}

export default StandardProject
