import React from 'react'
import request from 'superagent'

class SkillSet extends React.Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    console.log('I will fetch skills one day')
  }

  render () {
    return (
      <div>
        <p>My Skills are being held in a database. Press the button to access my skills</p>
        <button type='button' onClick={this.handleClick}>Fetch Skills</button>
      </div>
    )
  }
}

export default SkillSet
