import React from 'react'
import request from 'superagent'

class SkillSet extends React.Component {
  constructor () {
    super()
    this.handleTech = this.handleTech.bind(this)
    this.handleSoft = this.handleSoft.bind(this)
  }

  handleTech () {
    console.log('I will fetch tech skills one day')
  }

  handleSoft () {
    console.log('I will fetch soft skills one day')
  }

  render () {
    return (
      <div>
        <p>My Skills are being held in a database. Press the button to access my skills</p>
        <button type='button' onClick={this.handleTech}>Fetch Tech Skills</button>
        <button type='button' onClick={this.handleSoft}>Fetch Soft Skills</button>
      </div>
    )
  }
}

export default SkillSet
