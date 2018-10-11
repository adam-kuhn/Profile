import React from 'react'

import StandardProject from './StandardProject/StandardProject'

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
        live='http://race-fuel.herokuapp.com/#/'
        code='https://github.com/adam-kuhn/race-fuel'
      />
      <StandardProject
        title='OCR WOD Generator'
        image='/images/wodgenerator_scr-shot.png'
        desc='Produces a workout...'
        live={false}
        code='https://github.com/adam-kuhn/workout-generator'
      />
      <StandardProject
        title='Audio Player'
        image='/images/audioplayer_scr-shot.png'
        desc='A audio player built with React...'
        live={false}
        code='https://github.com/adam-kuhn/Audio-Player'
      />
    </div>
  )
}

export default Projects
