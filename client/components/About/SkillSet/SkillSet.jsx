import React from 'react'
import {connect} from 'react-redux'

import StarRating from './StarRating/StarRating'
import {getTechSkills, getSoftSkills} from '../../../actions/skills'

class SkillSet extends React.Component {
  constructor () {
    super()
    this.state = {
      skillType: ''
    }
    this.handleTech = this.handleTech.bind(this)
    this.handleSoft = this.handleSoft.bind(this)
  }

  handleTech () {
    this.props.dispatch(getTechSkills())
    this.setState({
      skillType: 'Tech Skills'
    })
  }

  handleSoft () {
    this.props.dispatch(getSoftSkills())
    this.setState({
      skillType: 'Soft Skills'
    })
  }

  render () {
    return (
      <div>
        <p>
          My Skills are being held in a database.
          Press the button to access my skills
        </p>
        <p>
          Having only been coding for just about 1
          year I am not naive enough to say that I
          have mastered any of the below technologies.
          But I am however extremly proficient with
          them and I am always learning and growing
          and I know that one day I will be a <q>Master</q>.
        </p>
        <button type='button' onClick={this.handleTech}>
          Fetch Tech Skills
        </button>
        <button type='button' onClick={this.handleSoft}>
          Fetch Soft Skills
        </button>
        <h2>{this.state.skillType}</h2>
        <ul>
          {this.props.skills.map(skill => {
            return (
              <li key={skill.id}>
                <p>{skill.skill}: <StarRating stars={skill.rating} /></p>
                <p>{skill.description}</p>
              </li>
            )
          })}
        </ul>

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
