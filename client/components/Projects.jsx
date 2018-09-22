import React from 'react'

import StandardProject from './Projects/StandardProj/StandardProj'

const Projects = () => {
  return (
    <div>
      <h2>Look at my sweet projects</h2>
      <StandardProject
        title='Deltage'
        image='/images/deltage_scr-shot.png'
        desc='Deltage does this...'
        live='http://deltage.nz/'
        code='https://github.com/TylerGriffin99/Deltage'
      />
      <StandardProject
        title='Race Fuel'
        image='/images/racefuel_scr-shot.png'
        desc='Race Fuel allows racers to track nutrtion through long endurance events...'
        live={false}
        code='https://github.com/adam-kuhn/race-fuel'
      />
    </div>
  )
}

export default Projects
