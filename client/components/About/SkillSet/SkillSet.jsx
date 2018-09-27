import React from 'react'
import {connect} from 'react-redux'

import {getTechSkills} from '../../../actions/skills'

class SkillSet extends React.Component {
  constructor () {
    super()
    this.handleTech = this.handleTech.bind(this)
    this.handleSoft = this.handleSoft.bind(this)
  }

  handleTech () {
    this.props.dispatch(getTechSkills())
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
        {this.props.skills.map(skill => {
          return (
            <div key={skill.id}>
              <li>{skill.skill}: {skill.description}</li>
              <p>{skill.rating} / 5</p>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    skills: state.skillSet.skills
  }
}

export default connect(mapStateToProps)(SkillSet)
